# Use the official Nginx image as base
FROM nginx:alpine

# Copy website files to Nginx's default public directory
COPY . /usr/share/nginx/html/

# Copy a custom Nginx configuration
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    # Enable directory listing for the posts/finance directory \
    location /posts/finance/ { \
        autoindex on; \
        autoindex_format html; \
        autoindex_exact_size off; \
        autoindex_localtime on; \
    } \
    # Handle requests for markdown files \
    location ~ \.md$ { \
        add_header Content-Type "text/markdown"; \
    } \
    # Handle HTML5 history API \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

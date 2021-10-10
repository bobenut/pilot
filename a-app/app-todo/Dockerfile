FROM nginx

COPY build /usr/share/nginx/html

COPY bootstrap.sh /

EXPOSE 80

CMD ["sh", "/bootstrap.sh"]
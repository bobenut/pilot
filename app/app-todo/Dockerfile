FROM nginx

COPY ./build /var/www/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY bootstrap.sh /

EXPOSE 80

CMD ["sh", "/bootstrap.sh"]
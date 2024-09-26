#!/bin/bash
# Reemplazar variables de entorno en un archivo SQL
envsubst < /docker-entrypoint-initdb.d/template.sql > /docker-entrypoint-initdb.d/init.sql

# Luego, ejecutar el SQL generado
mysql -u root -p"$MYSQL_ROOT_PASSWORD" < /docker-entrypoint-initdb.d/init.sql

# Demo All funds Front

Version NodeJS -> 20.18.0
Puerto en fase de desarrollo: 4200

## Instalación del proyecto

Descargar el proyecto de github y en la carpeta raiz ejecutar: 

```bash
npm install
```

Para iniciar el proyecto: 

```bash
npm start
```

Para hacer una build del proyecto:

```bash
ng build
```

## Despliegue del proyecto en DOCKER

Para meter el proyecto en un contendor de docker, he creado en una carpeta los archivos Dockerfile, compose.yml y una carpeta llamada html en la que va una build del proyecto dentro

### Dockerfile

```bash
FROM httpd:2.4

COPY ./html/ /usr/local/apache2/htdocs/
```

### compose.yml

```bash
services:
  apache-server:
    build:
      context: ./
      dockerfile: Dockerfile
    container_name: apache-server
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/local/apache2/htdocs
    restart: always
```

Una vez creados los archivos y meter la build dentro de la carpeta html, solo falta desplegar el contenedor:

```bash
docker-compose up -d
```

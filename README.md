# Proyecto: Lanzador de Servicios Dockerizados desde Web

Este proyecto permite lanzar una lista de servicios Dockerizados a través de una página web estática. Los servicios se gestionan mediante una API Dockerizada que recibe peticiones POST desde la web y arranca los contenedores en la máquina local.

## Características

- **Servicios Dockerizados**: Cada servicio corre en su propio contenedor Docker.
- **Sitio Web Estático**: Interfaz web para seleccionar y lanzar servicios.
- **API Dockerizada**: Recibe solicitudes POST desde la web y gestiona el ciclo de vida de los contenedores Docker en la máquina local.

## Estructura del Proyecto

- `index.html`: Página web estática para interactuar con los servicios.
- `Dockerfile` y archivos relacionados: Definen la API y los servicios Dockerizados (agregue según su implementación).

## Cómo Funciona

1. El usuario accede al sitio web estático (`index.html`).
2. Selecciona el servicio Dockerizado que desea lanzar.
3. El sitio web envía una solicitud POST a la API Dockerizada.
4. La API recibe la solicitud y arranca el contenedor Docker correspondiente en la máquina local.

## Requisitos

- [Docker](https://www.docker.com/) instalado en la máquina local.
- Navegador web para acceder a la interfaz estática.

## Ejecución

1. **Levantar la API Dockerizada:**
   ```bash
   docker build -t api-docker-launcher ./api
   docker run -d -p 5000:5000 -v /var/run/docker.sock:/var/run/docker.sock api-docker-launcher
   ```
2. **Abrir el sitio web:**
   Abra `index.html` en su navegador.
3. **Lanzar servicios:**
   Use la interfaz web para enviar solicitudes a la API y arrancar los servicios Dockerizados.

## Personalización

- Agregue o modifique servicios Dockerizados según sus necesidades.
- Edite la API para soportar nuevos servicios o lógica personalizada.

## Seguridad

- La API debe ejecutarse en un entorno seguro, ya que puede controlar contenedores Docker en la máquina local.

## Licencia

MIT

# Mongo image docker pulls from the official repos ( 7.0 is most recent release )
FROM mongo:7.0

# Setting default credentials to access mongodb
ENV MONGO_INITDB_ROOT_USERNAME=mongoadmin
ENV MONGO_INITDB_ROOT_PASSWORD=mongopass

# Port from container that will be connected (see compose file for localhost accessport)
EXPOSE 27017
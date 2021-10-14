# deploy for local
# deploy services
## service-todo
### local registry & docker run
#### build
* into folder `b-service/service-todo`.
* exe command `npm run build`

#### make a docker image
```
yarn run docker-local
```
> Install yarn before.

#### run container
```
docker run -p 8001:3000 --name service-todo -d service-todo:latest
```

#### view running logs
```
docker logs service-todo
```

#### into the container
```
docker exec -it service-todo /bin/bash
```

### remote registry & docker-compose run
#### make a docker image, push to remote registry
```
yarn run docker-registry
```

# deploy apps
## app-todo
### local registry & docker run
#### run container
```
docker run -e "BACKEND_BASE_URL=http://localhost:8001" -p 6001:80 --name app-todo -d app-todo:latest
```

#### into the container
```
docker exec -it app-todo /bin/bash
```

### remote registry & docker-compose run
##### make a docker image, push to remote registry
```
yarn run docker-registry
```
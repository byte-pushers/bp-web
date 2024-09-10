BASEDIR=$(CURDIR)

DOCKER_IMAGE_NAME=bp-web
SHA := $(shell git rev-parse --short HEAD)

dockerbuild:
	docker build -t tontepouncil/$(DOCKER_IMAGE_NAME) ./bp-web-client/angular-app

dockerpush: dockerbuild
	echo $(DOCKER_PASSWORD) | docker login -u "$(DOCKER_USERNAME)" --password-stdin
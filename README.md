# bp-web
![Travis CI Build](https://travis-ci.com/byte-pushers/bp-web.svg?branch=master)

# Dev Setup
Software needed to be installed
1. Install Open JDK 11
2. Install MySQL.
   https://dev.mysql.com/doc/refman/5.7/en/macos-installation-pkg.html
3. Install Git and configure SSH to clone the project

Setup Project
1. Clone project from https://github.com/byte-pushers/bp-web <br/>
   `git clone git@github.com:byte-pushers/bp-web.git`
2. Open project in IntelliJ Idea as Maven project
3. Build Maven project <br/>
   `mvn clean install`
4. Verify database details in `application-local.properties` file
5. Create new run configuration in IntelliJ Idea for Application
```
VM option: -Dspring.profiles.active=local
Main Class: software.bytepushers.bpweb.BpWebWsApplication
Class Path: -cp bp-web-ws
```
Refer screenshot: ![Run Configuration.png](postman%2FRun%20Configuration.png)
6. Run the above configuration
7. To check local server status call following URL.
```shell
curl --location --request GET 'http://localhost:8080/api/v1/health'
```
8. Use following postman collection and environment variable to validate local server. <br/>
    Postman Collection: [Bp-Web.postman_collection.json](postman%2FBp-Web.postman_collection.json) <br/>
    Postman Environment: [Bp-Web-local.postman_environment.json](postman%2FBp-Web-local.postman_environment.json)


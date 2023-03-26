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

# Deploy to AWS Lambda
1. AWS CLI should be configured for development environment.
2. Following properties should be added in environment variable
    1. **DATASOURCE_URL
    2. JWT_TOKEN_SECRET
    3. DATASOURCE_USERNAME
    4. DATASOURCE_PASSWORD**
    5. HUBSPOT_BASE_URL
    6. HUBSPOT_DEVELOPERKEY
3. Run following command and build the project <br />
   ```mvn clean install -P aws```
4. Run following command to copy jar file <br />
   ```cp ./bp-web-ws/target/bp-web-ws.jar ./bp-web-ws/target/bytepushers-bpweb-lambda.jar```
5. Copy jar file to AWS S3 bucket <br />
   ```aws s3 cp ./bp-web-ws/target/bytepushers-bpweb-lambda.jar s3://com.bytepushers.bpweb.ws/bytepushers-bpweb-lambda.jar```
6. Run this command to update AWS lambda code with the jar file from the S3 bucket
   ```aws lambda update-function-code --publish --function-name bytepushers-bpweb-ws --s3-bucket com.bytepushers.bpweb.ws --s3-key bytepushers-bpweb-lambda.jar --region us-east-2```
7. To check AWS lambda status call following URL. <br />
   ```curl --location --request GET 'https://api-dev.bytepushers.io/api/v1/health'```
8. Use following postman collection and environment variable to validate AWS Lambda on development environment. <br/>
   Postman Collection: [Bp-Web.postman_collection.json](postman%2FBp-Web.postman_collection.json) <br/>
   Postman Environment: [Bp-Web-dev.postman_environment.json](postman%2FBp-Web-dev.postman_environment.json)

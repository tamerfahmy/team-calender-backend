# Team Calender APIs

## Introduction
The aim of this application is to support team members working in different timezones accross the globe to propably setup meetings in respective local time zones. This REST APIs are designed to be the backend for the team calender application.

## Routes
To check/test available API routes please see SwaggerUI [SwaggerUI](http://localhost:3000/api-doc)
- `GET /date-time` This route returns a list of local datetime for supported timezones

## Project Structure
```
project
│   README.md
│   index.js
│   swagger.js
│   Dockerfile 
│
└───src
│   └───controllers
│   │       xx.controller.js
│   |       ...
│   └───routes
│   │       xx.route.js
│   │       ...
│   └───services
│   │       xx.service.js
│   │       ...
└───test
│   └───controllers
│   │       xx.controller.test.js
│   |       ...
│   │       ...
│   └───services
│   │       xx.service.test.js
│   │       ...
```

## Development
### Using Nodejs
1. Clone the repository locally
2. Download and install latest [nodejs](https://nodejs.org/en/download/)
3. Open local terminal to project root directory
4. run `npm i`
5. run `npm run start`
6. This message should appear on your terminal `Team Calender API listening on port 3000!`
### Using Docker
To run the APIs locally using docker (Docker Engine is required):
1. Clone the repository locally
2. Open local terminal to project root directory
3. `docker build . -t team-calender-api`
4. `docker run -p 300:300 -d team-calender-api`

## Testing
Jest framework is used to write unit test for this project, to run unit tests:
1. run `npm run test`
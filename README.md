# Team Calender APIs

[DEMO](https://team-calender-backend.herokuapp.com/api-docs/)

![example workflow](https://github.com/tamerfahmy/team-calender-backend/actions/workflows/main.yml/badge.svg)

## Introduction
The aim of this application is to support team members working in different timezones accross the globe to propably setup meetings in respective local time zones. This REST APIs are designed to be the backend for the team calender application.

## Routes
To check/test available API routes please see SwaggerUI [SwaggerUI](http://localhost:3000/api-docs)
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

## Testing
Jest framework is used to write unit test for this project, to run unit tests:
1. run `npm run test`

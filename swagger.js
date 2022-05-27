const options = {
  definition: {
    openapi: "3.0.0",
    basePath: "/api",
    info: {
      title: "Team Calender API",
      version: "1.0.0",
      contact: {
        name: "Tamer Fahmy"
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development",
      },
      {
        url: "https://team-calender-backend.herokuapp.com/api",
        description: "Production",
      },
    ],
  },
  apis: ["./src/routes/*.route.js"],
};

module.exports = {
    options
}
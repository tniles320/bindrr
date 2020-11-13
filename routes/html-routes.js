// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.agent) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });


  app.get("/agents", (req, res) => {
    // const currentAgentId = "";
    db.Agent.findAll({
      // where: {
      //   id: currentAgentId
      // }
    }).then(function(dbAgent) {
      const agents = [];
      for(let i = 0; i < dbAgent.length; i++) {
        agents.push(dbAgent[i].dataValues)
      };
      res.json(agents)
      // res.render("clients", { clients: clients })
    });
  });

  
  // route to display all clients of a specific agent
  app.get("/clients", (req, res) => {
    // const currentAgentId = "";
    db.Client.findAll({
      // where: {
      //   AgentId: currentAgentId
      // }
    }).then(function(dbClient) {
      const clients = [];
      for(let i = 0; i < dbClient.length; i++) {
        clients.push(dbClient[i].dataValues)
      };
      res.render("clients", { clients: clients })
    });
  });

  // route to display all clients of a specific company
  app.get("/company-clients", (req, res) => {
    // const currentCompanyId = "";
    db.Client.findAll({
      // where: {
      //   CompanyId: currentCompanyId
      // }
    }).then(function(dbClient) {
      const clients = [];
      for(let i = 0; i < dbClient.length; i++) {
        clients.push(dbClient[i].dataValues)
      };
      res.render("clients", { clients: clients })
    });
  });

  // route to a specific client and there comments
  app.get("/clients/:id", (req, res) => {
    db.Client.findOne({
      where: {
        id: req.params.id
    },
      include: [{
        model: db.Comment,
        where: {
          ClientId: req.params.id
        }
      }]
    }).then(function(dbClient) {
      const comments = [];
      for(let i = 0; i < dbClient.dataValues.Comments.length; i++) {
        comments.push(dbClient.dataValues.Comments[i].dataValues)
      };
      res.render("currentlead", { 
        id: dbClient.id,
        first_name: dbClient.first_name,
        last_name: dbClient.last_name,
        email: dbClient.email,
        phone: dbClient.phone,
        gender: dbClient.gender,
        wants_follow_up: dbClient.wants_follow_up,
        last_follow_up: dbClient.last_follow_up,
        comments: comments 
      })
    });
  });
};

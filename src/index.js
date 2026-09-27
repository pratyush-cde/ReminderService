const express = require("express");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const { PORT } = require("./config/serverConfig");
// const { sendBasicEmail } = require("./services/email-service");

const TicketController = require("./controllers/ticket-controller");

const jobs = require("./utils/job");
const setUpAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.createTicket);

  app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
    jobs();
  });
};

setUpAndStartServer();

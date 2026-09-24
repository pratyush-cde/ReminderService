const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");

const setUpAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);

    sendBasicEmail(
      "support@admin.com",
      "24515@iiitu.ac.in",
      "This is a testing email",
      "Hey are you good, I think you like the support",
    );
  });
};

setUpAndStartServer();

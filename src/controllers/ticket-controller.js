const { response } = require("express");
const TicketService = require("../services/email-service");

const createTicket = async (req, res) => {
  try {
    const response = await TicketService.createNotification(req.body);

    return res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "Notification created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: response,
      message: "not able to create notification",
      err: error,
    });
  }
};

module.exports = {
  createTicket,
};

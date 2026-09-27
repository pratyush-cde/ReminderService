const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();
const fetchPendingEmails = async (timeStamp) => {
  try {
    const response = await repo.get({
      status: "PENDING",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchPendingEmails,
  createNotification,
  updateTicket,
};

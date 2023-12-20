const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./email");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (request, response) => {
  const emailOptions = request.body;

  if (
    !emailOptions ||
    !emailOptions.email ||
    !emailOptions.subject ||
    !emailOptions.message
  ) {
    return response.status(400).json({ error: "Invalid email options" });
  }

  sendEmail(emailOptions);

  response.status(200).json({ message: "Email sent successfully!" });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

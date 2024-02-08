const express = require("express");
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  // "/" ---> API endpoint
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

import express from "express"; // Default import
//import { Sequelize } from "sequelize"; // named import
import { sequelize } from "./config.js";
import { User } from "./user.js";
// const sequelize = new Sequelize("postgres://postgres:pass@example.com:5432/dbname"); // Connection string

try {
  await sequelize.authenticate();
  await sequelize.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Create a new user
const jane = await User.create({ name: "esa", email: "esa@gmail.com" });
console.log("Jane's auto-generated ID:", jane.id);

const app = express();
app.use(express.json()); // middleware -> convert body into json

const PORT = 4000;
app.get("/", function (request, response) {
  // "/" ---> API endpoint
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
// To get the table
app.get("/users", async function (request, response) {
  // "/" ---> API endpoint
  response.send(
    await User.findAll({
      attributes: ["name", "email"],
    })
  );
});

//Find by id
app.get("/users/:id", async function (request, response) {
  console.log(request.params);
  const { id } = request.params;
  const NOT_FOUND_MSG = { msg: "user not found" };
  const obj = await User.findOne({
    where: {
      id: id,
    },
  });
  //response.send(obj ? obj : NOT_FOUND_MSG);
  obj ? response.send(obj) : response.status(404).send(NOT_FOUND_MSG);
});

//post in table
app.post("/users", async function (request, response) {
  console.log(request.body);
  const { name, email } = request.body;
  response.send(await User.create({ name, email }));
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

<ins>Setup Express JS

- Goto to an empty folder
- Create a file named **index.js**
- `npm init -y` - Will create package.json
- `npm i express` - Installs express
- Pasted the below sample code in index.js

```js
const express = require("express");
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
```

- Run the code `node index.js`
- Goto to **http://localhost:4000** to see the 🙋‍♂️, 🌏 🎊✨🤩 message.

Congratulations you created a server 🎉🎉

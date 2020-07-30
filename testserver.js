const bodyParser = require("body-parser");
const createQLServer = require("./createTestServer.js");

const cors = require("cors");
// Initialize variables.
const app = createQLServer();
app.use(cors());

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.start({ port: 4232 }, (deets) => {
  console.log(`server now running on port http://localhost:${deets.port}`);
});

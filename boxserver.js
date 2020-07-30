const bodyParser = require("body-parser");
const createQLServer = require("./createTestServer.js");
const cors = require("cors");
const fs = require("fs");
// Initialize variables.
const app = createQLServer();
app.use(cors());

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json

const options = {
  endpoint: "/graphql",
  port: 443,
  https: {
    key: fs.readFileSync(
      "/opt/bitnami/letsencrypt/certificates/canvasserver.momentumsolar.app.key"
    ),
    cert: fs.readFileSync(
      "/opt/bitnami/letsencrypt/certificates/canvasserver.momentumsolar.app.crt"
    ),
  },
};

app.start(options, ({ port }) => {
  console.log(`server now running on port http://localhost:${port}`);
});

// const { cargo } = require("async");
const express = require(`express`);
const path = require(`path`);
const Rollbar = require(`rollbar`);

// let rollbar = new Rollbar({
//   accessToken: `9c9e8f6ee3934079a6d44aca8e61e448`,
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// });
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "d2ae372101734a8c9f8309fde31e4f89",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();
app.use(express.json());

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
  Rollbar.info(`HTML file served successfully!`);
});

// include and initialize the rollbar library with your access token

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.get(`/api/lab`, (req, res) => {
  try {
    car();
  } catch (error) {
    rollbar.error(`error`);
  }
});

const port = process.env.PORT || 4005;

app.use(rollbar.errorHandler());

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

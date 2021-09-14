// const { cargo } = require("async");
const express = require(`express`);
const path = require(`path`);
const Rollbar = require(`rollbar`);

let rollbar = new Rollbar({
  accessToken: `9c9e8f6ee3934079a6d44aca8e61e448`,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
  Rollbar.info(`HTML file served successfully!`);
});

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

const express = require(`express`);
const path = require(`path`);
// const Rollbar = require(`rollbar`);

// let rollbar = new Rollbar({
//     accessToken: ``,
//     captureUncaught: true,
//     captureUnhandledRejections: true,
//   });

const app = express()

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/public/index.html`));
//   Rollbar.info(`HTML file served successfully!`)
});

const port = process.env.PORT || 4005;

// app.use(rollbar.errorHandler());

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});

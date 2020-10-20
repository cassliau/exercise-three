const express = require(`express`);

const app = express();
const port = 4000;

const indexRoute = require(`./routes/index.js`);
const aboutRoute = require(`./routes/about.js`);

/*-- Serve static file --*/
app.use(`/static`, express.static(`public`));

/*-- Route in express --*/
app.use(`/`, indexRoute);
app.use(`/about`, aboutRoute);
app.use(`/me`, aboutRoute);
app.use(`/json`, aboutRoute);

app.listen(port, () => console.log(`Exercise three is running!`));

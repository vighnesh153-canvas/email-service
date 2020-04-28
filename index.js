const express = require('express');
const app = express();

const PORT = process.env.PORT || 8090;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const helmet = require('helmet');
app.use(helmet({}));

const corsController = require('./controllers/cors-controller');
app.use(corsController);

const routes = require('./routes');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});

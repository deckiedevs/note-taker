const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
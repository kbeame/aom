const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const emailRouter = require(__dirname + '/email_router.js');
app.use('/api', emailRouter);

app.listen(PORT, () => console.log('server is up at ' + PORT));

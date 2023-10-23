const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

//static assets
app.use(express.static('./methods-public'));
//parse form data(alternative of body parser)
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.listen(5000, () => {
  console.log(`server is running at port 5000`);
});

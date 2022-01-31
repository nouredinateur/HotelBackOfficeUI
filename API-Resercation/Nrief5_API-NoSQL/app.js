const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());

// for .env fille
// require('dotenv/config')

// ROUTES
// user routes
const reservationRoute = require('./routes/reservationRoute');
// admin routes
const roomsDashboardRoute = require('./routes/adminRoutes/roomsDashboardRoute');
const customerDashboard = require('./routes/adminRoutes/customerDashboardRoute');
const reservationDashboardRoute = require('./routes/adminRoutes/reservationDashboardRoute');


app.get('/', (req, res) => {
    res.send('homeee')
});

app.use('/reservation', reservationRoute);
app.use('/roomsDashboard', roomsDashboardRoute);
app.use('/customerDashboard', customerDashboard);
app.use('/reservationDashboard', reservationDashboardRoute); 

// mongoose.connect(process.env.DB_CONNECTION, () => { console.log('connected to db') })
mongoose.connect('mongodb+srv://hoteldb:admin123@cluster0.rdrot.mongodb.net/quizdb?retryWrites=true&w=majority', 
() => { console.log('connected to db') })

app.listen(4000)
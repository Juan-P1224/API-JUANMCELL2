const express = require('express')
const cors = require('cors')
//const {Client} = require("pg");
const app = express()
//const helmet = require('helmet');
// ...
/*
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    "default-src": ["'self'"],
    "script-src": ["'self'", "'unsafe-inline'"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:"],
    "font-src": ["'self'"],
    "connect-src": ["'self'"]
  }
}));
*/

  
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./ApiAccesorios/routes')
const routes2 = require('./ApiDisplay/routes2')
const routesVenta = require('./ApiVentas/routesVenta')


//client.connect()



app.set('port', process.env.PORT || 9001)
const corsOptions = {
    origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));
//client.connect();
//client.connect(mysql);
//app.locals.db = client;
//app.use(client);

/*

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'juan',
    database: 'juanmcell'
}
*/

// middlewares -------------------------------------
//app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
// routes -------------------------------------------
app.get('/', (req, res) => {
    
    res.send('Welcome to my API')
})
app.use('/api', routes);
app.use('/display', routes2);
app.use('/venta', routesVenta);



// server running -----------------------------------
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})
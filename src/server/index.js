const dotenv=require("dotenv")
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');

// const cusomersRoute = require('./routes/customer.routes')
// const categoriesRoute = require('./routes/category.routes')

const tableRoute=require('./routes/table.routes')
app.use(express.json());


dotenv.config({ path: './.env' })
app.use(cors());
app.get('/api/getUser', (req,res)=>{
    const user = 'Evgeni';
    res.json(user);
})

app.use('/api',tableRoute);
// app.use('/api/customers',cusomersRoute);
// app.use('/api/categories',categoriesRoute);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const port = 5000;

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    
    
    // Express serve up index.html file if it doesn't recognize route
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen( port , () =>{
    console.log(`Server started on port ${port}`)
});


// const express = require('express');
// const os = require('os');
// const path = require('path');
// const bodyParser = require('body-parser')
// const cors = require('cors');
// const fs=require("fs")
// require('dotenv').config()
// require('./config/db')

// const tableRoute=require('./routes/table.routes')

// const app = express();
// const publicPath = path.join(__dirname,'..', 'public');
// const port = process.env.PORT || 8080;

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));

    
//  });

// app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
// app.use('/api',tableRoute);

// app.listen(port, () => console.log(`Listening on port ${port}!`));

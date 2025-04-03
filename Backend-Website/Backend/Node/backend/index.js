const apiRoutes = require('./Routes/apiRoutes'); 
const express = require('express'); 
var cors = require('cors'); 
const app = express(); 
var corsOptions = {  
    origin: 'http://localhost:4200',  // No trailing slash 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow necessary HTTP methods 
    allowedHeaders: ['Content-Type', 'Authorization']  // Allow necessary headers 
}; 
app.use(cors(corsOptions)); 
app.use(cors());  
app.use(express.json()); // Pour gérer les requêtes JSON 
// Use the API routes. 
app.use('/api', apiRoutes); 
//Démarrage du serveur  
const port = 3000; 
app.listen(port, () => { 
    console.log (`Server is running at http://localhost:${port}`);
}); 
const uri = 'mongodb://localhost:27017'; 
const dbName = 'SchoolDB'; 

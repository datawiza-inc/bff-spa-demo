const express = require("express");
const morgan = require("morgan");
const request = require('request-promise');
const passport = require("passport");
const bodyParser = require('body-parser');
const config = require('./config');
const basicAuth = require('basic-auth');


const API_PREFIX = '/api';

const noAuthApp = express();

noAuthApp.use(morgan('dev'));
noAuthApp.use(bodyParser.json());

const setHeader = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type, *");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
}

//enable CORS
noAuthApp.use(setHeader);

// API endpoint
let doctors = [{
    name: 'Mary Williams',
    age: '40',
    occupation: 'Surgery',
    hospital: 'El Camino Hospital'
  },
  {
    name: 'Alex Johnson',
    age: '30',
    occupation: 'Pediatric Department',
    hospital: 'Santa Clara Valley Medical Center'
  },
  {
    name: 'David Smith',
    age: '60',
    occupation: 'Cancer Department',
    hospital: 'O\'Connor Hospital'
  }
]

const handleUserInfo = (req, res) => {
  const dwToken = req.headers['dw-token'];
  if(dwToken) {
    res.status(200).json({
      isAuth: true,
      claims: {
        username: req.headers.username || 'N/A',
        email: req.headers.email || 'N/A',
        firstName: req.headers.firstname || 'N/A',
        lastName: req.headers.lastname || 'N/A'
      }
    })
  } else {
    res.status(403).json({
      error: 'no permission',
      isAuth: false
    })
  }
}

const handleSayHello = (req, res) => {
  res.status(200).json({
    message: 'Hello ' + req.query.name
  })
}

const handleGetDoctors = (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'success',
    data: doctors,
  })
}

const handlePostDoctor = (req, res) => {
  doctors.push(req.body);
  res.status(200).json({
    status: 200,
    message: 'success',
  });
};

noAuthApp.get(API_PREFIX + "/hello", handleSayHello);
noAuthApp.get(API_PREFIX + "/doctors", handleGetDoctors);
noAuthApp.post(API_PREFIX + "/doctors", handlePostDoctor);
noAuthApp.get(API_PREFIX + "/auth/me", handleUserInfo);

const noAuthPort = process.env.PORT || 5050;

noAuthApp.listen(noAuthPort, () => {
  console.log("Listening on port " + noAuthPort + " for no auth");
});
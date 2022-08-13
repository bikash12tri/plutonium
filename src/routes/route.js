const express = require('express');
const router = express.Router();
const UserController= require("../controllers/bookController")


router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})







router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

//1st Assignment
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"
        ]
    },
]


router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let repeatedPerson = false

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            repeatedPerson = true;
            break;
        }
    }
    if (repeatedPerson == true) {
        res.send("This player was already exsist")
    } else {
        players.push(newPlayer)
        res.send(players)
    }
});

//2 nd Assignment
let booking = [
    {
        bookingNumber: 1,
        bookingId: 12,
        sportId: "",
        centerId: "",
        type: "private",
        slot: "16286598000000",
        bookedOn: "31/08/2021",
        bookedFor: "01/09/2021",
    },
];


router.post("/players/:playerName/bookings/:bookingId", function (req, res) {
    let playerExist = false
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == req.params.playerName) {
            playerExist = true
        }
    }
    if (!playerExist) {
        return res.send("This player does not exist")
    }
    for (let i = 0; i < booking.length; i++) {
        if ((booking[i].bookingId == req.params.bookingId)) {
            return res.send("This booking id already existed in Data");
        }
    }
    req.body.playerName = req.params.playerName
    req.body.bookingId = req.params.bookingId

    booking.push(req.body);
    return res.send(booking);
});

//3rd Assignment

let persons = [
    {
      name : "PK",
      age : 10,
      votingstatus : false
    },
    {
        name : "Sk",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HQ",
        age : 40,
        votingstatus : false
    }
]
router.post("/persons", function (req,res){

let votingAge = req.query.votingAge
    let result = []
    for(let i =0; i<persons.length;i++){
        let id = persons[i]
        if(id.age>votingAge){
            id.votingstatus=true
             result.push(id)
        }
    }
    
    return res.send({data : result , status : true})

});


// const express = require('express');
// // const router = express.Router();
// const UserController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBooks", UserController.createBooks  )

router.get("/getBooks", UserController.getBooks)

module.exports = router;

 module.exports = router;
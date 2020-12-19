const dbConfig = require('./config/db.config')


const db = require("./models");

const Flight = require('./models/flight.model');
const Terminal = require('./models/terminal.model');
const Airport = db.airport;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
  name: "First Airport",
   country: "US",
  opened: "2020-12-15"
})

const flight1 = new Flight({
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines"
})

const flight2 = new Flight({
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways"
})

const terminal = new Terminal({
  name: "Terminal 1",
  flights: [flight1, flight2],
  capacity: 234324
})

const airport1 = new Airport({
	name: "JFK",
	country: "US",
  opened: "1990-07-01"
})

airport1.save()
airport1.terminals.push(terminal)

console.log("Airport saved", airport1)
console.log(terminal)
// Lets Make and Save our first airport
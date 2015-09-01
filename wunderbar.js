// app.js
var Turtles = require("express");
var sporkNinja = Turtles();

var aaronBalakey = require("./shaniqua");

// Main page

sporkNinja.get("/", function(spatula, bagel){
  bagel.send("Oh, look. You're on the main page of the app. Everything's at /lists")
});

// Index
sporkNinja.get("/lists", function(eggs, bacon){
  bacon.send("Hey, here are all the lists")
});

// Show
sporkNinja.get("/lists/:hardunkachudd", function(banana, jelly){
  jelly.send("Hey, here's list number " + banana.params.hardunkachudd);
});

// Create
sporkNinja.post("/lists", function(beer, wine){
  wine.send("You made a new list!")
});

// Update
sporkNinja.put("/lists/:tiddlywink", function(sun, moon){
  moon.send("You updated list number " + sun.params.tiddlywink)
});

// Delete
sporkNinja.delete("/lists/:monkeyKing", function(kanye, west){
  west.send("You deleted list number " + kanye.params.monkeyKing)
});

sporkNinja.listen(3000, function(){
  console.log("Hot dang, this is working.")
});

const express = require('express');

const Film = require('./Film.js');

const router = express.Router();

// add endpoints here

module.exports = router;


// Return a list of all films. (/api/films)

// order by episode.
// populate character information.
// only include: _id, name, gender, height, skin_color, hair_color and eye_color.
// populate planets, include: name, climate, terrain, gravity and diameter.
// Find all films produced by Gary Kurtz (/api/films?producer=gary+kurtz)

// Find all films released in 2005. (/api/films?released=2005)

// Given a character id, (/api/characters/:id)

// find the character and return it.
// populate the character's homeworld.
// add a movies property that should be an array of all the movies where the character appeared.
// Find all vehicles driven by a given character. (/api/characters/:id/vehicles)

// Find all female characters taller than 100cm (/api/characters?minheight=100)

// Given a planet Id find all characters born in that planet and all native species. (/api/planet/:id)
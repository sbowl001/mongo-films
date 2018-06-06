const express = require('express');

const Film = require('./Film.js');

const router = express.Router();

// add endpoints here
router.get('/', (req, res) => {
    let query = Film.find() 
    const { producer, released} = req.query;
    // order by episode.
    query.sort('episode')
    // Find all films produced by Gary Kurtz (/api/films?producer=gary+kurtz)
    if( producer !== undefined){
        query.where({"producer": RegExp(producer, 'i')}) //i ignores uppercase/lowercase
    }

// Find all films released in 2005. (/api/films?released=2005)
    if(released !== undefined) {
        query.where({'release_date': {$regex: released}}) //, $options: 'i'
    }

// Return a list of all films. (/api/films)
    query.then( films => {
        res.status(200).json(films);
    })
    .catch(err => {res.status(500).json({errorMessage: "Information could not be retrieved"})
})
});
 
module.exports = router;





// populate character information.
// only include: _id, name, gender, height, skin_color, hair_color and eye_color.
// populate planets, include: name, climate, terrain, gravity and diameter.




// Given a character id, (/api/characters/:id)

// find the character and return it.
// populate the character's homeworld.
// add a movies property that should be an array of all the movies where the character appeared.
// Find all vehicles driven by a given character. (/api/characters/:id/vehicles)

// Find all female characters taller than 100cm (/api/characters?minheight=100)

// Given a planet Id find all characters born in that planet and all native species. (/api/planet/:id)
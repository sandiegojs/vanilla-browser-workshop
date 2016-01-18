console.log('here')
let b = [1,2,3]
console.log(...b)

var xhr = require('./lib/xhr');

xhr('GET', 'http://sandiegojs-vanilla-workshop.herokuapp.com/skills', null,
    function (err, data) {
        if (err) throw err; // throw to know
        console.lod(data);
    });


// https://sandiegojs-vanilla-workshop.herokuapp.com
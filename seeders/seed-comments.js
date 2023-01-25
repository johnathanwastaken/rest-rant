const db = require('..//models')

// To use await, we need an async function.
async function seed() {
    //Get a place
    let place = await db.Place.findOne({ name: 'Coffee and Plants'})


// Create a fake sample comment.
let comment = await db.Comment.create({
    author: 'Kylo Ren',
    rant: false,
    stars: 5.0,
    content: 'This place is 🔥 '
})

let comment2 = await db.Comment.create({
    author: 'Darth Vader',
    rant: true,
    stars: 3.0,
    content: 'The drinks are the delicious but the place is too pink, needs more black.'
})

//Add that comment to the place's comment array.
place.comments.push(comment.id)
place.comments.push(comment2.id)

//Save the place now that it has comment
await place.save()

//Exit  the program
process.exit()
}


seed();
const db = require('..//models')

db.Place.create([{
    name: 'Coffee and Plants',
    city: 'Pasadena',
    state:'CA',
    cuisines: 'Plant-Based Coffee',
    pic: 'https://images.squarespace-cdn.com/content/v1/5d5f5aa78dcf6e0001e7c2b4/1613422382154-RUBCIG3O0J90IKO99P8W/bluelavender.jpg',
    founded: 2019

}, {
    name: 'Wildflour',
    city: 'Pawtucket',
    state:'RI',
    cuisines: 'Vegan Bakery, Juice Bar, Plant-Based Coffee',
    pic: 'https://vegoutmag.com/wp-content/uploads/2022/05/Wildflour.jpg',
    founded: 1996
}, {
    name: 'Dear Diary',
    city: 'Austin',
    state: 'TX',
    cuisines: 'Plant-Based Coffee',
    pic: 'https://eatdrinktogo.com/img/img_1027-1-.jpg',
    founded: 2020
} ])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
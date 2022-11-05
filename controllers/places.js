const { application } = require('express')
const places = require('../models/places')

const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic){
    //Default image if one is not provided
    req.body.pic = 'https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state){
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/', (req, res) => {
      res.render('places/index', {places})
  });

  router.get('/:id', (req, res) => {
    console.log(req.params.id)
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]){
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id})
    }
  })

  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })

  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  

  router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]){
      res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
module.exports = router
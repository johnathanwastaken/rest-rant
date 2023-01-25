const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
      name: { type: String, required: true },
      pic: { type: String, default: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'},
      cuisines: { type: String, required: true},
      city: { type : String, default: 'Anytown'},
      state: { type: String, default: 'USA'},
      founded: {
            type: Number,
            min: [803, 'Is it really that old?'],
            max: [new Date().getFullYear(), 'You made a time machine out of a DeLorean? Because this year is in the future']
      },
      comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

placeSchema.methods.showEstablished = function() {
      return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)

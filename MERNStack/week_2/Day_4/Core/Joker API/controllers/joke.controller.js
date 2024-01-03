// The controller does the C R U D for the DB

const Joke = require("../models/joke");

// READ ALL
module.exports.findAllDocs = (req, res) => {
    Joke.find()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => res.json(err));
};

// READ ONE BY ID

module.exports.findOneDoc = (req, res) => {
    Joke.findOne({ _id: req.params.id })
    .then((oneDoc) => {
      res.json(oneDoc);
    })
    .catch((err) => res.json(err));
};

// CREATE

module.exports.createNewDoc = (req, res) => {
    Joke.create(req.body)
    .then((newDoc) => {
      res.json(newDoc);
    })
    .catch((err) => res.json(err));
};

// UPDATE

module.exports.updateExisitingDoc = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedDoc) => {
      res.json(updatedDoc);
    })
    .catch((err) => res.json(err));
};

// DELETE
module.exports.deleteOneDoc = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then((DeletedDoc) => {
      res.json(DeletedDoc);
    })
    .catch((err) => res.json(err));
};

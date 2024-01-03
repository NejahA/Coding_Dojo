const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokeController.findAllDocs);
  app.post("/api/jokes/new", JokeController.createNewDoc);
  app.get("/api/jokes/:id", JokeController.findOneDoc);
  app.patch("/api/jokes/:id", JokeController.updateExisitingDoc);
  app.delete("/api/jokes/:id", JokeController.deleteOneDoc);
};

const CollectionController = require("../controllers/collection.controller");

module.exports = (app) => {
  app.get("/api/products", CollectionController.findAllDocs);
  app.post("/api/products/new", CollectionController.createNewDoc);
  app.get("/api/products/:id", CollectionController.findOneDoc);
  app.patch("/api/products/edit/:id", CollectionController.updateExisitingDoc);
  app.delete("/api/products/delete/:id", CollectionController.deleteOneDoc);
};

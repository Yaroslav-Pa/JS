const User = require("./models/UserModels"),
  userController = require("./controlers/userControllers.js");

module.exports = function (app) {
  /**
   *@swagger
   *  /user:
   *     get:
   *       tags: [User]
   *       description: Get all users
   *       responses:
   *         200:
   *           description: "success"
   *           content:
   *             application/json:
   *               schema:
   *                 type: array
   *                 items:
   *                   properties:
   *                     name:
   *                       type: string
   *                       example: yaroslav
   *                     age:
   *                       type: integer
   *                       example: 18
   */
  app.get("/user", userController.getListOfUsers);
  app.delete("/user/remove/doc", userController.removeEmpty);
  app.delete(
    "/user/remove-empty-age-and-name",
    userController.removeEmptyAgeAndName
  );
  app.get("/user/smallest-man-woman", userController.findSmollManAndWoman);
  app.get("/user/find-one-youngest", userController.findOneYoungest); //// ? ?
  app.get("/user-height", userController.getHeightsUser);
  app.get("/user/:name", userController.getUsersByName); //
  app.post("/user", userController.addUser);
  app.delete("/user/:userId", userController.removeUser);
  app.put("/user/:userId", userController.updateUser);
  app.get("/user/user-by-age/:from/:to", userController.getUsersByAge);
  app.get(
    "/user/users-height-from-to/:from/:to",
    userController.getUsersHeightFromTo
  );
  app.put("/add-height", userController.addFieldHeight);
};

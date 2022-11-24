const mongoose = require("mongoose"),
  user = mongoose.model("Users");

exports.getListOfUsers = function (req, res) {
  user
    .find((err, users) => {
      if (err) res.send(err);

      res.json(users);
    })
    .sort({ age: -1 });
  // .limit(2);
};

exports.getUsersByName = function (req, res) {
  user.find(
    {
      name: { $regex: req.params.name, $options: "i" },
    },
    (err, users) => {
      if (err) res.send(err);

      res.json(users);
    }
  );
};

exports.addUser = function (req, res) {
  let newUser = new user(req.body);
  console.log(req.body);
  newUser.save((err, user) => {
    if (err) res.send(err);

    res.json(user);
  });
};

exports.removeUser = (req, res) => {
  user.remove(
    {
      _id: req.params.userId,
    },
    (err, user) => {
      if (err) res.send(err);
      res.json({
        message: "user deleted",
      });
    }
  );
};

exports.updateUser = (req, res) => {
  user.findOneAndUpdate(
    {
      _id: req.params.userId,
    },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.getUsersByAge = (req, res) => {
  user.find(
    {
      age: {
        $gte: req.params.from,
        $lte: req.params.to,
      },
    },
    (err, users) => {
      if (err) res.send(err);
      res.json(users);
    }
  );
};

exports.removeEmpty = (req, res) => {
  user.remove(
    {
      name: { $exists: false },
    },
    (err, user) => {
      if (err) res.status(404).send(err);
      res.json({
        message: "user deleted",
      });
    }
  );
};

exports.addFieldHeight = (req, res) => {
  user.updateMany(
    {},
    {
      $set: { height: 170 },
    },
    (err, user) => {
      if (err) res.status(404).send(err);
      res.status(200).json({
        message: "Updated",
      });
    }
  );
};

exports.getHeightsUser = (req, res) => {
  user
    .find((err, users) => {
      if (err) res.send(err);

      res.json(users);
    })
    .sort({ height: -1 })
    .limit(1);
};

exports.removeEmptyAgeAndName = (req, res) => {
  user.remove(
    {
      $and: [{ name: "" }, { age: 0 || "" }],
    },
    (err, user) => {
      if (err) res.status(404).send(err);
      res.json({
        message: "user deleted",
      });
    }
  );
};

exports.getUsersHeightFromTo = (req, res) => {
  user.find(
    {
      height: {
        $gte: req.params.from,
        $lte: req.params.to,
      },
    },
    (err, users) => {
      if (err) res.send(err);
      res.json(users);
    }
  );
};

exports.findOneYoungest = (req, res) => {
  user
    .findOne(
      {
        age: { $exists: true },
      },
      (err, users) => {
        if (err) res.send(err);
        res.json(users);
      }
    )
    .sort({ age: 1 });
};

exports.findSmollManAndWoman = (req, res) => {
  user.aggregate(
    [
      {
        $group: {
          _id: "$sex",
          minHeight: { $min: "$height" },
        },
      },
    ],
    (err, users) => {
      if (err) res.send(err);
      res.json(users);
    }
  );
};

const express = require("express");
const rolesMiddleware = require("../midellewares/rolesMiddleware");
const auth = require("../midellewares/auth");

const filmsRouter = express.Router();

const filmsController = require("../controllers/FilmsController");

// http://localhost:5050/api/v1/films
// Добавить фильм
filmsRouter.post(
  "/films",
  (req, res, next) => {
    console.log("Worked Joi");
    next();
  },
  filmsController.add
);

// Получить один фильм
filmsRouter.get("/films/:id", filmsController.getOne);

// Получить все фильмы
filmsRouter.get(
  "/films",
  auth,
  rolesMiddleware(["ADMIN", "MODERATOR", "USER"]),
  filmsController.getAll
);

// Обновить один фильм
filmsRouter.put("/films/:id", filmsController.updateOne);

// Удалить фильм
filmsRouter.delete("/films/:id", filmsController.removeOne);

module.exports = filmsRouter;

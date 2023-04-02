const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // читаємо token із заголовків запиту
    const [tokenType, token] = req.headers.authorization.split(" ");

    // перевіряємо чи переданий сам токен і чи це токен авторизації
    // розшифровуємо токен
    if (token && tokenType === "Bearer") {
      const decodedData = jwt.verify(token, "pizza");
      req.user = decodedData;
      next();
    }

    // передаємо інформацію з токену далі
  } catch (err) {
    res
      .status(401)
      .json({ code: 401, message: "Not authorized", error: err.message });
  }
};

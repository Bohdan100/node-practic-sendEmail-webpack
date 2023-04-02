const UserModel = require("../models/usersModel");

module.exports = (rolesArray) => {
  return async (req, res, next) => {
    try {
      const user = await UserModel.findById(req.user.id);
      // if (!user) {
      //   res.status(403).json({ code: 403, message: "Not permission" });
      // }

      let hasRole = false;
      user.roles.forEach((role) => {
        if (rolesArray.includes(role)) {
          hasRole = true;
        }
      });

      if (!hasRole) {
        res.status(403).json({ code: 403, message: "Not permission" });
      }

      next();
    } catch (err) {
      res
        .status(403)
        .json({ code: 403, message: "Not permission", error: err.message });
    }
  };
};

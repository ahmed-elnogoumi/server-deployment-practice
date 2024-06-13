module.exports = (req, res, next) => {
    if (req.query.name) {
      next();
    } else {
      next(new Error('Name query parameter is required'));
    }
  };
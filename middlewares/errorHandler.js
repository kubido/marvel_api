const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "Not Found":
      res.status(err.code).json({
        status: err.code,
        message: err.message
      })
      break;
    default:
      res.status(500).json({
        status: 500,
        message: "Something went wrong",
        description: err.message
      })
      break;
  }
}

module.exports = errorHandler
const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "resourceNotFound":
      res.status(404).json({
        message: "Resource not found"
      })

    default:
      res.status(500).json({
        message: "Something went wrong"
      })
  }
}

module.exports = errorHandler
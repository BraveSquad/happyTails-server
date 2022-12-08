'use strict';

// eslint-disable-next-line no-unused-vars
function handle404(req, res, next) {
  const errorObject = {
    status: 404,
    message: 'Sorry, these are not the drones you were looking for',
  };

  res.status(404).json(errorObject);
}

module.exports = handle404;
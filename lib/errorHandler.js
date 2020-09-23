'use strict';

function errorHandler(error) {
  console.error(error);
  throw new Error(error.message);
}

module.exports = errorHandler;

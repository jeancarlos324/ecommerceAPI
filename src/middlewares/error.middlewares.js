const handleError = (error, request, response, next) => {
  const { status, message, errorContent } = error;
  response.status(status).json({
    message,
    error: errorContent.message,
  });
};

module.exports = handleError;

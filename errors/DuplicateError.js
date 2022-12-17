class DuplicateError extends Error {
  constructor(message = 'Фильм уже добавлен в коллекцию') {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = DuplicateError;

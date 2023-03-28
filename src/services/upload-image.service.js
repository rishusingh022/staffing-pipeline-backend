const multer = require('multer');
const memoryStorage = multer.memoryStorage();
const uploadImage = multer({ storage: memoryStorage });

module.exports = { uploadImage };

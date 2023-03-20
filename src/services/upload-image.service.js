const multer = require('multer');
const path = require('path');
const fs = require('fs');

const engagementImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/engagement-images/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const userImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/user-images/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadEngagementImage = multer({ storage: engagementImageStorage });
const uploadUserImage = multer({ storage: userImageStorage });

module.exports = { uploadEngagementImage, uploadUserImage };

const multer = require('multer');
const path = require('path');

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

const caseStudyImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/case-study-images/'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const uploadEngagementImage = multer({ storage: engagementImageStorage });
const uploadUserImage = multer({ storage: userImageStorage });

const uploadCaseStudyImage = multer({ storage: caseStudyImageStorage });

module.exports = { uploadEngagementImage, uploadUserImage, uploadCaseStudyImage };

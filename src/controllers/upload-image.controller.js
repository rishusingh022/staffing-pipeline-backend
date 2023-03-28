const { uploadFile } = require('../utils/s3Client');
const uploadEngagementImage = async (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return res.status(400).json({
      error: 'Please upload a file',
    });
  }
  const imageUrl = await uploadFile(file, 'engagement-images');
  res.json({
    data: {
      imageUrl,
    },
  });
};

const uploadUserImage = async (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return res.status(400).json({
      error: 'Please upload a file',
    });
  }
  const imageUrl = await uploadFile(file, 'user-images');
  res.json({
    data: {
      imageUrl,
    },
  });
};

const uploadCaseStudyImage = async (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return res.status(400).json({
      error: 'Please upload a file',
    });
  }
  const imageUrl = await uploadFile(file, 'case-study-images');
  res.json({
    data: {
      imageUrl,
    },
  });
};

module.exports = { uploadEngagementImage, uploadUserImage, uploadCaseStudyImage };

const uploadEngagementImage = (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.json({
    data: {
      fileName: file.filename,
      imageUrl: `${req.protocol}://${req.get('host')}/images/engagement-images/${file.filename}`,
    },
  });
};

const uploadUserImage = (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.json({
    data: {
      fileName: file.filename,
      imageUrl: `${req.protocol}://${req.get('host')}/images/user-images/${file.filename}`,
    },
  });
};

module.exports = { uploadEngagementImage, uploadUserImage };

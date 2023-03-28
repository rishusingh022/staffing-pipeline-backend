const { PutObjectCommand, S3Client } = require('@aws-sdk/client-s3');
require('dotenv').config();

const s3Client = new S3Client();

const uploadFile = async (file, folder) => {
  const newFileName = Date.now() + '-' + file.originalname;
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: folder + '/' + newFileName,
    Body: file.buffer,
    // send content type to s3
    ContentEncoding: 'base64',
    ContentType: file.mimetype,
  };
  try {
    await s3Client.send(new PutObjectCommand(params));
    const imageUrl = `https://staffing-pipeline-images.s3.amazonaws.com/${folder}/${newFileName}`;
    return imageUrl;
  } catch (err) {
    return err;
  }
};

module.exports = { uploadFile };

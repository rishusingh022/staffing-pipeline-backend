const dotenv = require('dotenv');
dotenv.config();

const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.OKTA_CLIENT_ID,
  issuer: 'https://' + process.env.OKTA_DOMAIN + '/oauth2/default',
  assertClaims: {
    aud: 'api://default',
    cid: process.env.OKTA_CLIENT_ID,
  },
});

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'missing okta token' });
    }
    //console.log(authorization);
    const accessToken = req.headers.authorization;
    const audience = 'api://default';

    const jwt = await oktaJwtVerifier.verifyAccessToken(accessToken, audience);
    req.user = {
      uid: jwt.claims.uid,
      email: jwt.claims.sub,
    };
    console.log('successfully loged in');
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: 'invalid okta token' });
  }
};

module.exports = { validateToken };

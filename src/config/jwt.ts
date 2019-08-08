export default {
  jwt_secret_key: process.env.jwt_secret_key || 'secret',
  expiresIn: process.env.expiresIn || '90 days',
};

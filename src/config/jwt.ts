export default {
  secret_key: process.env.secret_key || 'secret',
  expiresIn: process.env.expiresIn || '90 days',
};

import mongoose from 'mongoose';

const PasswordResetTokenSchema = new mongoose.Schema({
  token: { type: String },
  email: { type: String },
  requested : { type: Date },
  expires: { type: Date },
  used: { type: Boolean }
});

const PasswordResetTokens = mongoose.model('PasswordResetTokens', PasswordResetTokenSchema);

export default PasswordResetTokens;
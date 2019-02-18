import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema({
  owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
  guardians: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
});

const Medicines = mongoose.model('Tokens', MedicineSchema);

export default Medicines;
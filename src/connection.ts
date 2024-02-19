import mongoose from 'mongoose';

const tvHelperConnection = mongoose.createConnection(process.env.DB_URL ?? '');

mongoose.set('debug', false);

export default tvHelperConnection;

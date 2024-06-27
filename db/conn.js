const mongoose = require('mongoose');

// Connection URL for the local MongoDB instance
const mongoURL = 'mongodb://localhost:27017/ResumeDataBase';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log('Connection to MongoDB successful');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

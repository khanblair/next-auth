import mongoose from "mongoose";

let initialized = false;

export const connect = async () => { // {{ edit_1 }}

    mongoose.set('strictQuery', true);

    if(initialized) {
        console.log('MongoDB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'next-auth-app',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
        initialized = true;
    }
    catch(error) {
        console.error('Failed to connect to MongoDB', error);
    }

}
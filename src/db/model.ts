import mongoose from 'mongoose';

const nombreCollectionUsers = 'users';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const user = mongoose.model(nombreCollectionUsers, userSchema)
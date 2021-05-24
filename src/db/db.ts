import mongoose from 'mongoose'

export class MongoDB {
    URL: string;

    constructor(URL) {
        this.URL = URL

        process.on('exit' , () => {
            this.close()
        })
    }

    async connect() {
        try {
            await mongoose.connect(this.URL, { useNewUrlParser: true, useUnifiedTopology: true })
        } catch (err) {
            console.log(`MongoDB: Error to connect: ${err}`)
            throw err
        }
    }

    close() {
        console.log('Closing MongoDB connection');
    }
}
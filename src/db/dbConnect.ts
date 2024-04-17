import mongoose from "mongoose";

//db ke connection ke baad jo value aa rhi hai
type ConnectionObject = {
    isConnected?: number  //yeh value optional hoti hai 
}

const connection: ConnectionObject = {} //empty iss lie rkh pye hai kyu ki upr optional dia hua hai

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }

    try {
        const db =  await mongoose.connect(process.env.MONGODB_URL || '')

        connection.isConnected = db.connections[0].readyState

        console.log("DB Connected succefully");
    } catch (error) {
        console.log("Database connection failed",error)
        process.exit(1)
    }
}

export default dbConnect;
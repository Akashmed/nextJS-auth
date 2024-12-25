import connectDB from "@/lib/connectDB"


export const POST = async (request) =>{
    try {
        const db = await connectDB();
        const usersCollection = db.collection('users');
        const newUser = await request.json();
        const res = await usersCollection.insertOne(newUser);
        return Response.json({message: 'user created successfully'})
    } catch (error) {
        return Response.json({message :'something went wrong'})
    }
}
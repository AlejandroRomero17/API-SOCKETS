import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI)
.then(db=> console.log("----Connection established----"))
.catch(err=>console.error(err));

export default mongoose;
import mongoose from "mongoose";
const url ="mongodb+srv://ashishkrsarraf567:kimka2-tijxok-henmYq@cluster0.hzzvubi.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;

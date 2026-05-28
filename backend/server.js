const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const MessageSchema = new mongoose.Schema({
    text: String
});

const Message = mongoose.model("Message", MessageSchema);

app.get("/api", async (req, res) => {
    const messages = await Message.find();

    if(messages.length === 0){
        await Message.create({ text: "Hello from MongoDB Docker Container / Backend API Running Successfully" });
    }

    const updatedMessages = await Message.find();

    res.json(updatedMessages);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

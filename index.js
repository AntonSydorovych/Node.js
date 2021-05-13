import express from 'express';
import mongoose from 'mongoose';
import postRouter from './postRouter.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = `mongodb+srv://antsyd:root@cluster0.mnflt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', postRouter);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => console.log(`server working on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

startApp();

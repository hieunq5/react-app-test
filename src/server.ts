import express from "express"
import { Initializer } from "./Initializer";
const fs = require('fs');
const testFolder = './src/';

const app = express()

app.get('/test', (req: any, res: any) => {
    fs.readdirSync(testFolder).forEach((file: any) => {
        console.log(file);
    });
    Initializer.init();
    res.send('hello from server!');
});

app.listen(3001, () => {
    console.log('App listening on port 3001');
});

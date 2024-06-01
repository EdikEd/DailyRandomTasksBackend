import express from 'express';

const app = express();
const port = 8080;

app.use(express.json());


app.listen(port, () => {
    console.log(`App is (updated) listening on port ${port}`);
})


import express from 'express';
import mqttData from './mqtt.js'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

const users = []


app.get('/', (req, res) => {
    res.send('Server is ready to command')
});

app.get('/mqtt/datas', (req,res) => {
    res.send(mqttData)
});


app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
});
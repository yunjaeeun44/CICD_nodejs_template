import express from "express";
import config from './config/index.js';
import routes from './routes/index.js';

const app = express()

app.use(express.json()); //JSON 문자열이 넘어오는 경우 객체로 변환
app.use(express.urlencoded({ extended: false })); //요청 본문의 데이터를 req.body 객체로 생성

app.use("/", routes);

app.get("/", (req, res, next) => {
    res.send('Hello world!');
});

app.listen(config.port, () => {
    console.log(`
    ################################################
            🛡️  Server listening on ${config.port}🛡️
    ################################################
    `);
});

export default {
    app
};
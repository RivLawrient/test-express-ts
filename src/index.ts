import express from 'express';
import {UserRoutes} from "./routes/user-routes";

const app = express();

UserRoutes(app);

app.listen(3003, () => {
    console.log("selamat aplikasi sudah berjalan di port 3001")
})
import express from "express";
import cors from "cors";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import UserRoute from "./routers/UserRoute.js";
import ProductRoute from "./routers/ProductRoute.js";
import AuthRoute from "./routers/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync()
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      // http false, https true
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    // bisa menggunakan array agar bisa multi domain
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.APP_PORT, () => {
  console.log("server running perfectly...");
});

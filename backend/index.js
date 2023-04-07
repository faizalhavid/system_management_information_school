import  express  from "express";
import  cors  from "cors";
import  dotenv  from "dotenv";
import SiswaRoute from "./routes/SIswaRoute.js";

const app = express();
app.use(cors());
app.use(express.json()); //can take date by json
app.use(SiswaRoute);
app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and runnig...')
});
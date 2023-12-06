import express from 'express';
import {connnectToDb} from './utils/db.js'
import apiRoutes from './routes/apiRoutes.js'
import cors from 'cors';
import { errorHandler, notFound,} from './utils/middleware.js';
import CONFIG from './utils/config.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());


connnectToDb(
    ()=>app.listen(CONFIG.PORT,()=>console.log(`listening on ${CONFIG.PORT}`))
    );

app.get('/',(req,res)=>{
    res.send('Namaste World');
})

app.use('/api', apiRoutes)

app.use(notFound);
app.use(errorHandler);

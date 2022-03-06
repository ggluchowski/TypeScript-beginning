import express from 'express';
import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* API ENDPOINTS */
app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
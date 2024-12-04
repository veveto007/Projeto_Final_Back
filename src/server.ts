import express from 'express';
import contactRoutes from './routes/contactRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(contactRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



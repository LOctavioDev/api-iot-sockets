import app from "./app.js";
import mongoose from "./database.js";
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}`);
});

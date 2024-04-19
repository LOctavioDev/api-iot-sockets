import app from "./app.js";
import mongoose from "./database.js";

const port = 3000;

app.listen(port, () => {
  console.log(`Server on port http://localhost:${port}`);
});

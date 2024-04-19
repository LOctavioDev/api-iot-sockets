import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/api-sockets?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("CONEXION EXITOSA");
  })
  .catch((err) => {
    console.log(err);
  });

export default mongoose;

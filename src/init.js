import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 4500;

const handleListening = () =>
  console.log(`Server Listening on port http://localhost:${PORT}`);

app.listen(4500, handleListening);

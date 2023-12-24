import app from "./app";
import connectDB from "./config/db";
import env from "./utils/validateEnv";

const port = env.PORT || 5000;

connectDB();

app.listen(port, () => console.log("server is listening on port: " + port));

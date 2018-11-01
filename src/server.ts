import app from "./app"

import { port } from "./config/server"

app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`);
});
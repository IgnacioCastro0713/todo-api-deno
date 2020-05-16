import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from "./router.ts";


const app = new Application();

// routes
app.use(router.routes())
app.use(router.allowedMethods())


export default app;

import configureOpenApi from "@/lib/configure-open-api";
import initializeApp from "@/lib/initialize-app";
import index from "@/routes/index.route";

const app = initializeApp();

const routes = [
  index,
];

configureOpenApi(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;

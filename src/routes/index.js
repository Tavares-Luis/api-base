import clienteRoute from "./clienteRoute.js";
import emprestimoRoute from "./emprestimoRoute.js";
import livroRoute from "./livroRoute.js";

function Routes(app) {
  livroRoute(app),
  clienteRoute(app);
  emprestimoRoute(app);
}

export default Routes;
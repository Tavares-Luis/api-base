import emprestimoController from "../controllers/emprestimoController.js";

export default (app) => {

    app.get('./cliente/emprestimo', emprestimoController.get);
    app.get('./cliente/emprestimo/:id', emprestimoController.get);
    app.post('.cliente/emprestimo', emprestimoController.persist);
    app.patch('./cliente/emprestimo/:id', emprestimoController.persist);
    app.delete('./cliente/emprestimo/:id', emprestimoController.destroy);

};
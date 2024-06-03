const productsRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');


productsRouter.get('/listar', controller.getAll);
productsRouter.get('/listarId/:id', controller.getById);
productsRouter.post('/criar', controller.create);
productsRouter.patch('/editar/:id', controller.update);
productsRouter.delete('/apagar/:id', controller.delete);
module.exports = productsRouter;
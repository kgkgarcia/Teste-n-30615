// Importa o módulo Router do Express e cria um objeto de roteamento
const productsRouter = require('express').Router();

// Importa os controladores para manipular as requisições relacionadas aos produtos
const controller = require('../controllers/products');

// Importa o middleware de autenticação
const authMiddleware = require('../middlewares/auth/auth');

// Define as rotas e os métodos HTTP correspondentes, juntamente com os controladores associados
productsRouter.get('/listar', controller.getAll); // Rota para listar todos os produtos
productsRouter.get('/listarId/:id', controller.getById); // Rota para obter um produto por ID
productsRouter.post('/criar', controller.create); // Rota para criar um novo produto
productsRouter.patch('/editar/:id', controller.update); // Rota para editar um produto existente
productsRouter.delete('/apagar/:id', controller.delete); // Rota para apagar um produto existente

// Exporta o objeto de roteamento para que possa ser utilizado em outros ficheiros
module.exports = productsRouter;

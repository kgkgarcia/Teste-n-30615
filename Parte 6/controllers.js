
const apiResponse = require('../utils/response/apiResponse');
const Products = require('../data/entities/products');

exports.getAll = async (req, res) => {
    try {
        const produtos = await prisma.produtos.findMany();
        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor: " + error.message });
    }

}

exports.getById = async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica se o produto existe
        const produtosExiste = await prisma.produtos.findUnique({
            where: { id: parseInt(id) },
        });

        if (!produtosExiste) {
            return res.status(404).json({ msg: "Produto não encontrado" });
        }

        // Lista aquele o produto
        const produtos = await prisma.produtos.findUnique({
            where: { id: parseInt(id) },
        });


        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor: " + error.message });
    }
}


exports.create = async (req, res) => {
    try {
        const { nome, preco, quantidade } = req.body;
        const novoProduto = await prisma.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
            },
        });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ msg: "Erro interno do servidor: " + error.message });
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, quantidade } = req.body;

        // Verifica se o produto existe
        const produtosExiste = await prisma.produtos.findUnique({
            where: { id: parseInt(id) },
        });

        if (!produtosExiste) {
            return res.status(404).json({ msg: "Produto não encontrado" });
        }

        const produtoAtualizado = await prisma.produtos.update({
            where: { id: parseInt(id) },
            data: {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
            },
        });

        return res.status(200).json(produtoAtualizado);
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor: " + error.message });
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica se o produto existe
        const produtosExiste = await prisma.produtos.findUnique({
            where: { id: parseInt(id) },
        });

        if (!produtosExiste) {
            return res.status(404).json({ msg: "Produto não encontrado" });
        }

        await prisma.produtos.delete({
            where: { id: parseInt(id) },
        });

        return res.status(200).json({ msg: "Produto deletado" });
    } catch (error) {
        return res.status(500).json({ msg: "Erro interno do servidor: " + error.message });
    }
}

// List.js
export default class List {
    constructor(productManager) {
        this.productManager = productManager;
    }

    renderList() {
        const productItems = document.getElementById('productItems');
        productItems.innerHTML = '';

        this.productManager.getProducts().forEach((product, index) => {
            const productItem = document.createElement('li');
            productItem.classList.add('product__item');
            if (index % 2 === 0) {
                productItem.classList.add('product__item--even');
            } else {
                productItem.classList.add('product__item--odd');
            }

            productItem.textContent = `Produto ${index + 1}: ${product.name}, Categoria: ${product.category}, Quantidade: ${product.quantity}, Preço de Custo: R$${product.costPrice}, Preço de Venda: R$${product.salePrice}, Fornecedor: ${product.supplier}, Data de Entrada: ${product.entryDate}`;
            productItems.appendChild(productItem);
        });
    }
}

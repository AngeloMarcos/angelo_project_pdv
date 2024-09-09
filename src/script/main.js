import Product from './product.js';
import ProductManager from './productManager.js';
import List from './list.js';

// Criar instância do gerenciador de produtos
const productManager = new ProductManager();

// Criar instância da lista de produtos
const productList = new List(productManager);

// Adicionar eventos e lógica para o formulário e exibição
document.querySelector('.product__btn-submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Capturar os valores dos campos do formulário
    const name = document.getElementById('product__name').value;
    const category = document.getElementById('product__category').value;
    const quantity = document.getElementById('product__quantity').value;
    const costPrice = document.getElementById('product__cost-price').value;
    const salePrice = document.getElementById('product__sale-price').value;
    const supplier = document.getElementById('product__supplier').value;
    const entryDate = document.getElementById('product__entry-date').value;

    // Criar um objeto produto
    const product = new Product(name, category, quantity, costPrice, salePrice, supplier, entryDate);

    // Adicionar o produto ao gerenciador
    productManager.addProduct(product);

    // Atualizar a lista de exibição
    productList.renderList();
});

document.querySelector('.product__btn-list').addEventListener('click', function(event) {
    const productSection = document.querySelector('.product');
    productSection.style.display = 'none';

    const productListSection = document.querySelector('.list');
    productListSection.classList.add('list__active');

    productList.renderList();
});


// Função para limpar o formulário
document.querySelector('.product__btn-clear').addEventListener('click', function() {
    document.getElementById('productForm').reset();
});

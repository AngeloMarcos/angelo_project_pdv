import Product from './product.js';
import ProductManager from './productManager.js';

// Criar instância do gerenciador de produtos
const productManager = new ProductManager();

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
  displayProducts();
});

document.querySelector('.product__btn-list').addEventListener('click', function(event) {
    // Seleciona o elemento com a classe .product__info
    const productSection = document.querySelector('.product');
    // Oculta a seção .product__info
    productInfoSection.style.display = 'none';

    // Seleciona a seção .list
    const productListSection = document.querySelector('.list');
    // Alterna a visibilidade da seção .list
    productListSection.classList.toggle('list__active');
});

function displayProducts() {
  const productItems = document.getElementById('productItems');
  productItems.innerHTML = '';

  productManager.getProducts().forEach((product, index) => {
    const productItem = document.createElement('li');
    productItem.textContent = `Produto ${index + 1}: ${product.name}, Categoria: ${product.category}, Quantidade: ${product.quantity}, Preço de Custo: R$${product.costPrice}, Preço de Venda: R$${product.salePrice}, Fornecedor: ${product.supplier}, Data de Entrada: ${product.entryDate}`;
    productItems.appendChild(productItem);
  });
}

// Função para limpar o formulário
document.querySelector('.product__btn-clear').addEventListener('click', function() {
  document.getElementById('productForm').reset();
});

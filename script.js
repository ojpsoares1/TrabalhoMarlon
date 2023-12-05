// Manipulações para a Página de Apresentação (index.html)
// Manipulação 1: Alterar cor de fundo ao passar o mouse sobre um artigo
const articles = document.querySelectorAll('article');

articles.forEach(article => {
    article.addEventListener('mouseover', () => {
        article.style.backgroundColor = '#ffd700'; // Cor de fundo ao passar o mouse
    });

    article.addEventListener('mouseout', () => {
        article.style.backgroundColor = ''; // Reverter a cor de fundo ao retirar o mouse
    });
});

// Manipulações para a Página de Galeria (galeria.html)
// Manipulação 2: Destacar borda ao passar o mouse sobre as imagens
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.border = '2px solid #ff4500'; // Destacar borda ao passar o mouse
    });

    image.addEventListener('mouseout', () => {
        image.style.border = '1px solid #ccc'; // Reverter a borda ao retirar o mouse
    });
});

// Manipulações para a Página de Cadastro (cadastro.html)
// Manipulação 3: Adicionar evento ao botão "Enviar" para simular o envio do formulário
document.getElementById('submitButton').addEventListener('click', function () {
    submitForm();
});

// Manipulação 4: Adicionar evento ao botão "Mostrar Agradecimento" para simular a exibição de agradecimento
document.getElementById('thankYouButton').addEventListener('click', function () {
    document.getElementById('feedback').innerHTML = 'Obrigado por se cadastrar!';
});

// Manipulação 5: Adicionar evento ao botão "Preencher Formulário Automaticamente" para preencher o formulário
document.getElementById('autofillButton').addEventListener('click', function () {
    document.getElementById('name').value = 'Nome Autopreenchido';
    document.getElementById('email').value = 'exemplo@email.com';
    document.getElementById('message').value = 'Mensagem automática';
});

// Função para simular o envio do formulário
function submitForm() {
    // Lógica para lidar com o envio do formulário (simulação)
    document.getElementById('feedback').innerHTML = 'Formulário enviado com sucesso!';
}

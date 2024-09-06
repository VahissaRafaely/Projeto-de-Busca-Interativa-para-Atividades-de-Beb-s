
let dados = [ // Array de objetos contendo informações sobre os resultados da pesquisa
  {
            titulo: "Livros sobre desenvolvimento infantil",// Título do resultado
            descricao: "O desenvolvimento infantil é um processo contínuo e complexo, caracterizado por mudanças significativas nas esferas física, cognitiva, social e emocional. Desde o nascimento até a adolescência, as crianças passam por diversas etapas, cada uma com suas particularidades. Na primeira infância, por exemplo, o desenvolvimento físico é acelerado, e as habilidades motoras e sensoriais se refinam. Já na pré-escola, a linguagem se expande rapidamente, e a criança começa a interagir de forma mais complexa com o ambiente social. A idade escolar é marcada pelo desenvolvimento do pensamento lógico e abstrato, e a adolescência, por profundas transformações físicas, cognitivas e emocionais.", // Descrição do resultado
            link: "https://melhoreslivrosdabel.com/lista-com-os-melhores-livros-sobre-desenvolvimento-infantil/", // Link para mais informações
            TextLink: "Indicações de livros",// Texto do link para o usuário
 },
 {
            titulo: "Brincadeiras e Desenvolvimento infantil",// Título do resultado
            descricao: "Brincar é muito mais do que apenas se divertir. É através das brincadeiras que as crianças exploram o mundo, desenvolvem habilidades físicas, cognitivas, sociais e emocionais. Ao brincar, elas aprendem a interagir com outras crianças, a resolver problemas, a expressar seus sentimentos e a construir sua própria identidade. A brincadeira é fundamental para o crescimento saudável e feliz das crianças, preparando-as para os desafios da vida adulta", // Descrição do resultado
            link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/primeira-infancia/desenvolvimento-infantil",// Link para mais informações
            TextLink: "Saiba mais",// Texto do link para o usuário
  },
  {
            titulo: "Alimentação saudável e Crescimento",// Título do resultado
            descricao: "Uma alimentação saudável é essencial para o crescimento e desenvolvimento das crianças, fornecendo os nutrientes necessários para fortalecer ossos, músculos e cérebro. Uma dieta equilibrada, rica em frutas, legumes, grãos integrais, proteínas magras e gorduras saudáveis, contribui para o desenvolvimento físico e cognitivo, além de prevenir doenças como obesidade e diabetes. É fundamental estabelecer hábitos alimentares saudáveis desde a infância, oferecendo uma variedade de alimentos e preparando refeições caseiras com ingredientes frescos. Ao incentivar a alimentação saudável, os pais garantem um futuro mais saudável e feliz para seus filhos.",// Descrição do resultado
            link: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/primeira-infancia/alimentacao-saudavel",// Link para mais informações
            TextLink: "Guia de alimentaçao para crianças",// Texto do link para o usuário
  },
  {
            titulo: "Desenvolvimento da Linguagem",// Título do resultado
            descricao: "O desenvolvimento da linguagem é um processo gradual e complexo. Falar, ler e escrever são habilidades essenciais para a vida e para o aprendizado. Estimular a linguagem desde a primeira infância é fundamental para o desenvolvimento cognitivo da criança.", // Descrição do resultado
            link: "https://fonoaudiologia.org.br/wp-content/uploads/2019/09/Prancha-de-Desenvolvimento-Revisada-em-2023.pdf",// Link para mais informações
            TextLink:"Saiba mais sobre desenvolvimento da linguagem",// Texto do link para o usuário
     
  }
];
  
  let section = document.getElementById("searchResults");
  let searchButton = document.getElementById("searchButton");
  let searchInput = document.getElementById("searchInput"); // Declare e inicialize searchInput
  
  // Função para realizar a pesquisa e filtrar os dados
  function buscar(termoPesquisa) {
    // Filtra os dados com base no termo de pesquisa
    const resultadosFiltrados = dados.filter(dado => {
      return dado.titulo.toLowerCase().includes(termoPesquisa) || dado.descricao.toLowerCase().includes(termoPesquisa);
    });
    return resultadosFiltrados;
  }

// Função para renderizar os resultados da pesquisa na página
function renderizarResultados(dados) {
  let resultsHTML = ""; // Inicializa a variável aqui

  dados.forEach(dado => {
    resultsHTML += `
      <div class="item.searchResultado">
        <h2>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">${dado.TextLink}</a>
      </div>
    `;
  });

  section.innerHTML = resultsHTML;
}
// Adiciona um ouvinte de evento ao botão de pesquisa
searchButton.addEventListener('click', () => {
  const pesquisa = searchInput.value.toLowerCase().trim(); // Obtém e limpa o valor do input

  if (pesquisa) { // Verifica se o termo de pesquisa não está vazio
      const resultados = buscar(pesquisa);
      if (resultados.length === 0) {
          section.innerHTML = '<p>Nada foi encontrado para a palavra "' + pesquisa + '".</p>';
      } else {
          renderizarResultados(resultados);
      }
  } else {
      section.innerHTML = '<p>Por favor, digite um termo de pesquisa.</p>';
  }
});








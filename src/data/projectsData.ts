export const PROJECTS = [
  {
    id: 1,
    name: 'Varstation',
    shortDescription: 'Plataforma de análise genômica para visualização e interpretação de variantes.',
    detailedDescription: 'Plataforma de análise genômica para visualização e interpretação de variantes. Focada em fornecer uma solução completa para análise de dados genômicos, integrando diferentes tecnologias.',
    technologies: ['Angular', 'Django', 'Testes Unitários', 'Pandas', 'Redux', 'Material UI', 'Node.js'],
    image: '/images/varstation.png',
    videoLink: 'https://www.youtube.com/embed/6iGu-s_y_0c?si=I90eLbKCrbUr4L8E',
  },
  {
    id: 2,
    name: 'Varsmetagen',
    shortDescription: 'Plataforma de metagenômica para análise de dados microbiológicos.',
    detailedDescription: 'Plataforma de metagenômica para análise de dados microbiológicos. Projetada para análise eficiente de amostras complexas, facilitando a visualização e interpretação de resultados.',
    technologies: ['Angular', 'Django', 'Testes Unitários', 'Redux', 'Pandas'],
    image: '/images/varsmetagen.png',
    videoLink: 'https://www.youtube.com/embed/cCxbIDGpLJg?si=b_PTSzkeKdPudZqT',
  },
  {
    id: 3,
    name: 'Kahootify',
    shortDescription: 'Um jogo de adivinhação baseado no jogo Kahoot feito em JavaScript puro.',
    detailedDescription: 'Uma aplicação descontraída baseada no jogo Kahoot onde o objetivo é acertar o compositor da música que está tocando em menos tempo possível. A aplicação foi feita inteiramente em JavaScript, sem a utilização de qualquer biblioteca ou framework. Todas as informações, como gênero musical, artista e nome da música, foram retiradas da API do Spotify!',
    technologies: ['HTML', 'JavaScript', 'CSS', 'Spotify API'],
    image: '/images/Kahootify.png',
    startDate: '2021',
    videoLink: 'https://www.youtube.com/embed/1r-7QB_1QrM',
  },
  {
    id: 4,
    name: 'Aplicativo de receitas',
    shortDescription: 'Um site complexo de receitas feito em React.js.',
    detailedDescription: 'Um aplicativo de receitas feito com o intuito de aprimorar meu conhecimento em React. Nesse aplicativo, utilizei majoritariamente Context API para manipulação de informações e LocalStorage para salvar informações de sessão. O aplicativo conta com mais de 15 páginas diferentes, a possibilidade de iniciar receitas, favoritar, compartilhar elas! As comidas/bebidas são extraídas de uma API, assim como todas suas informações.',
    technologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'LocalStorage', 'RTL', 'Bootstrap'],
    image: '/images/Recipes_App.png',
    startDate: '2021',
    videoLink: 'https://www.youtube.com/embed/Q7OK1ZuPYhk',
    GitHubLink: 'https://github.com/LuanVittor/Recipes-App',
  },
  {
    id: 5,
    name: 'Trybe Store',
    shortDescription: 'Uma loja online completa feita em React.js.',
    detailedDescription: 'Essa loja virtual foi feita usando a API do MercadoLivre e fazendo toda manipulação de informações utilizando apenas props. O maior aprendizado desse projeto veio através da confusão de dados, onde era preciso passar informações entre componentes pais e filhos, fazendo a aplicação ficar cheia de funções e de alta complexidade. Isso mostrou a necessidade de se usar Redux e React Hooks!',
    technologies: ['React', 'Api Rest', 'JavaScript', 'CSS', 'HTML', 'Cypress', 'LocalStorage'],
    image: '/images/TrybeStore.png',
    startDate: '2021',
    videoLink: 'https://www.youtube.com/embed/i3THVCZUmNM',
    GitHubLink: 'https://github.com/LuanVittor/FrontEnd-Online-Store',
  },
];

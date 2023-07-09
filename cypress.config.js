const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true, //aqui habilitamos a execução de todos os testes de uma vez só pelo modo interativo.
  },
  fixturesFolder: false, //não vamos usar a pasta fixture, então desligamos essa pasta para o cypress não cria-la novamente
  video: false, // estamos desligando a geração de videos
})

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, //não vamos usar a pasta fixture, então desligamos essa pasta para o cypress não cria-la novamente
  video: false, // estamos desligando a geração de videos
})

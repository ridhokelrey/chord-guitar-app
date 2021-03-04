const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'chordguitar-app',
    user: process.env.DB_USER || 'chordguitar',
    password: process.env.DB_PASS || 'chordguitar',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      retry: {
        max: 10
      },
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../chordguitar.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secretKey'
  }
}
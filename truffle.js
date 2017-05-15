// Allows us to use our .babelrc profile in tests.
require('babel-register')

module.exports = {
  migrations_directory: './migrations',
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    testnet: {
      host: 'localhost',
      port: 8545,
      network_id: 3
    }
  }
}

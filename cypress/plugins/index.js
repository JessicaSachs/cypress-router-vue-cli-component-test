// default webpack file preprocessor is good for simple cases
const { onFileDefaultPreprocessor } = require('cypress-vue-unit-test/preprocessor/webpack')

module.exports = on => {
  on('file:preprocessor', onFileDefaultPreprocessor)
}
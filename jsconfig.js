module.exports = {
  include: ['./src/**/*'],
  compilerOptions: {
    baseUrl: 'src',
    paths: {
      '@/*': ['./*']
    }
  },
  exclude: ['node_modules'],
  typeAcquisition: {
    include: ['jest']
  }
};

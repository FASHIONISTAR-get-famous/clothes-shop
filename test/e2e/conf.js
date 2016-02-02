exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['clothesShopFeature.js'],
  capabilities: {
    browserName: 'chrome'
  }
};

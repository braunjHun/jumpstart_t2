const { Application } = require('../src/application');

describe('Test dummy functions', () => {
  it('dummy test', () => {
    const application = new Application();
    expect(application.dummy()).toEqual("");
  });
});
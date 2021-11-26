const { Application } = require('../src/application');

describe('Mine Sweeper', () => {
  describe('As a player I start the game I want to see the board So that I can start to play the game...', () => {
    it('GIVEN string the game WHEN drawing the board THEN I will get back the new empty board', () => {
      const application = new Application();
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created");
    });
  });
});
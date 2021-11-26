const { Application } = require('../src/application');

describe('Mine Sweeper', () => {
  describe('As a player I start the game I want to see the empty board So that I can start to play the game...', () => {
    it('GIVEN nothing WHEN drawing the board THEN I will see the new empty board', () => {
      const application = new Application();
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created");
    });
  });
  describe('As a player I step on a bomb I want to see BOOM! – Game Over So that I know I did a wrong movement', () => {
    it('GIVEN step to position 1;1 WHEN drawing the board THEN I will see an X in 1;1 on the board and the message BOOM! – Game Over', () => {
      const application = new Application();
      application.takeStep([1,1]);
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.");
    });
    it('GIVEN step to position 0;2 WHEN drawing the board THEN I will see an X in 0;2 on the board and the message BOOM! – Game Over', () => {
      const application = new Application();
      application.takeStep([0,2]);
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.");
    });
  });
});
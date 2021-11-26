const { Application } = require('../src/application');

describe('Mine Sweeper', () => {
  describe('As a player I start the game I want to see the empty board So that I can start to play the game...', () => {
    it('GIVEN nothing WHEN drawing the board THEN I will see the new empty board', () => {
      const application = new Application();
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created");
    });
  });
  describe('As a player I step on a bomb I want to see BOOM! – Game Over So that I know I did a wrong movement', () => {
    const us2Step = [
      [1, 1],
      [0, 2],
      [2, 0]
    ];
    const us2Result = [
      ["+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."],
      ["+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."],
      ["+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."]
    ];
    for (let i = 0; i < us2Step.length; i++) {
      it(`GIVEN step to position [${us2Step[i]}] WHEN drawing the board THEN I will see\n${us2Result[i]}`, () => {
        const application = new Application();
        application.takeStep(us2Step[i]);
        expect(application.drawBoard()).toEqual(us2Result[i].toString());
      });
    }
  });
  describe('As a player I step on a clean position I want to see the number of bombs around So that I can plan my next step', () => {
    it(` GIVEN step to position 1;1
    WHEN drawing the board
    THEN I will see an 3 in 1;1 on the board and the message 3 bombs around your square. `, () => {
      const application = new Application([
        [" ","B"," "],
        ["B"," ","B"],
        [" "," "," "],
      ]);
        application.takeStep([1,1]);
        expect(application.drawBoard()).toEqual(["+-+-+-+\n| | | |\n+-+-+-+\n| |3| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square."],);
    });
  });    
});
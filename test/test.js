const { Application } = require('../src/application');

describe('Mine Sweeper', () => {
  describe('As a player I start the game I want to see the empty board So that I can start to play the game...', () => {
    it('GIVEN nothing WHEN drawing the board THEN I will see the new empty board', () => {
      const application = new Application();
      expect(application.drawBoard()).toEqual("+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created");
    });
  });
  describe('As a player I step on a bomb I want to see BOOM! – Game Over So that I know I did a wrong movement', () => {
    const us2Map = [
      [[" ", " ", " "], [" ", "B", " "], [" ", " ", " "]],
      [[" ", " ", "B"], [" ", " ", " "], [" ", " ", " "]],
      [[" ", " ", " "], [" ", " ", " "], ["B", " ", " "]]
    ];
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
        const application = new Application(us2Map[i]);
        application.takeStep(us2Step[i]);
        expect(application.drawBoard()).toEqual(us2Result[i].toString());
      });
    }
  });
  describe('As a player I step on a clean position I want to see the number of bombs around So that I can plan my next step', () => {
    const us3Map = [
      [[" ", "B", " "], ["B", " ", "B"], [" ", " ", " "]],
      [[" ", "B", " "], ["B", " ", "B"], [" ", " ", " "]],
      [[" ", "B", " "], ["B", " ", "B"], [" ", " ", " "]]
    ];
    const us3Step = [
      [1, 1],
      [0, 2],
      [2, 0]
    ];
    const us3Result = [
      ["+-+-+-+\n| | | |\n+-+-+-+\n| |3| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 3 bombs around your square."],
      ["+-+-+-+\n| | |2|\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] 2 bombs around your square."],
      ["+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|1| | |\n+-+-+-+\n\n[Sandbox 3x3] 1 bombs around your square."]
    ];
    for (let i = 0; i < us3Step.length; i++) {
      it(`GIVEN step to position [${us3Step[i]}] WHEN drawing the board THEN I will see [${us3Result[i]}]`, () => {
        const application = new Application(us3Map[i]);
        application.takeStep(us3Step[i]);
        expect(application.drawBoard()).toEqual(us3Result[i].toString());
      });
    }
  });

  describe('As a player I want to mark the bombs expected So that I can think on the next cleaning step', () => {
    const us4Map = [
      [[" ", " ", " "], ["B", " ", " "], [" ", " ", " "]],
      [[" ", " ", " "], ["B", "B", " "], [" ", " ", " "]],
      [[" ", " ", " "], ["B", "B", " "], [" ", "B", " "]],
    ];
    const us4Step = [
      [2, 0],
      [2, 0],
      [2, 0]
    ];
    const us4Mark = [
      [[1, 0]],
      [[1, 0], [1, 1]],
      [[1, 0], [1, 1], [2, 1]]
    ];
    const us4Result = [
      ["+-+-+-+\n| | | |\n+-+-+-+\n|*| | |\n+-+-+-+\n|1| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."],
      ["+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|2| | |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."],
      ["+-+-+-+\n| | | |\n+-+-+-+\n|*|*| |\n+-+-+-+\n|3|*| |\n+-+-+-+\n\n[Sandbox 3x3] Square flagged as bomb."]
    ];
    for (let i = 0; i < us4Step.length; i++) {
      it(`GIVEN a positon [${us4Mark[i]}] to mark WHEN drawing the board THEN I will see ${us4Result[i]}`, () => {
        const application = new Application(us4Map[i]);
        application.takeStep(us4Step[i]);
        application.markSquare(us4Mark[i]);
        expect(application.drawBoard()).toEqual(us4Result[i].toString());
      });
    }
  });

  describe('As a player I want to mark all the bombs expected So that I can win the game', () => {
    it(`GIVEN all the squares WHEN drawing the board THEN I will see ["+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB! "`, () => {
      const application = new Application([[" ", " ", " "], ["B", "B", " "], [" ", "B", " "]]);
      application.takeStep([0, 0]);
      application.takeStep([0, 1]);
      application.takeStep([0, 2]);
      application.takeStep([1, 2]);
      application.takeStep([2, 0]);
      application.takeStep([2, 2]);
      application.markSquare([[1, 0], [1, 1], [2, 1]]);
      expect(application.drawBoard()).toEqual("+-+-+-+\n|2|2|1|\n+-+-+-+\n|*|*|2|\n+-+-+-+\n|3|*|2|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!");
    });
  });
  
  describe('As a player I want win automatically if the massive cleaning function clear the board So that I can win the game', () => {
    it(`GIVEN bomb on [0,2] then click on [0,0] WHEN drawing the board THEN I will see +-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!`, () => {
      const application = new Application([[" ", " ", "B"], [" ", " ", " "], [" ", " ", " "]]);
      application.takeStep([0, 0]);
      expect(application.drawBoard()).toEqual("+-+-+-+\n|_|1| |\n+-+-+-+\n|_|1|1|\n+-+-+-+\n|_|_|_|\n+-+-+-+\n\n[Sandbox 3x3] the land is cleared! GOOD JOB!");
    });
  });
});
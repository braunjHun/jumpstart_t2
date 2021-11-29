class Application {

  BOARD_HORIZONTAL_LINE = "+-+-+-+";
  BOARD_COLUMN = "|";
  BOARD_NEW_LINE = "\n";
  BOARD_MSG_LINE = "";
  BOARD_MAP = [[]];
  BOARD_SPACE = " ";
  BOARD_BOOM = "X";
  BOARD_BOMB = "B";
  BOARD_MARK = "*";
  BOARD_CLEAN = "_";

  BOARD_MATRIX = [
    [[[0, 1], [1, 0], [1, 1]],
    [[0, 0], [0, 2], [1, 0], [1, 1], [1, 2]],
    [[0, 1], [1, 1], [1, 2]]],
    [[[0, 0], [0, 1], [1, 1], [2, 0], [2, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 0], [1, 2], [2, 0], [2, 1], [2, 2]],
    [[0, 1], [0, 2], [1, 1], [2, 1], [2, 2]]],
    [[[1, 0], [1, 1], [2, 1]],
    [[1, 0], [1, 1], [1, 2], [2, 0], [2, 2]],
    [[1, 1], [1, 2], [2, 1]]]
  ];

  MSG_CREATE = "[Sandbox 3x3] Game created";
  MSG_BOOM = "[Sandbox 3x3] BOOM! – Game Over.";
  MSG_CLEAN = "[Sandbox 3x3] <NUM> bombs around your square.";
  MSG_MARK = "[Sandbox 3x3] Square flagged as bomb.";
  MSG_CLEARED = "[Sandbox 3x3] the land is cleared! GOOD JOB!";

  constructor(inputMap) {
    if (inputMap == null) {
      this.BOARD_MAP = [
        [this.BOARD_SPACE, this.BOARD_SPACE, this.BOARD_SPACE],
        [this.BOARD_SPACE, this.BOARD_SPACE, this.BOARD_SPACE],
        [this.BOARD_SPACE, this.BOARD_SPACE, this.BOARD_SPACE]
      ];
    } else {
      this.BOARD_MAP = inputMap;
    }
    this.setMessageLine(this.MSG_CREATE);
  }

  setMessageLine(msg) {
    this.BOARD_MSG_LINE = msg;
  }

  getBoardMsgLine() {
    if (this.isBoardCleared()) {
      this.setMessageLine(this.MSG_CLEARED);
    }
    return this.BOARD_NEW_LINE + this.BOARD_MSG_LINE;
  }

  isBoardCleared() {
    let countSpace = 0;
     for (let line of this.BOARD_MAP) {
      countSpace += line.filter((space) => space === this.BOARD_SPACE).length;
    }
    return countSpace == 0;
  }
  takeStep(step) {
    if (this.isBomb(step)) {
      this.setSign(step, this.BOARD_BOOM);
      this.setMessageLine(this.MSG_BOOM);
    } else {
      let bombCount = this.getBombCount(step);
      if (bombCount == 0) {
        this.automaticallyClearing(step);
      } else {
        this.setSign(step, bombCount.toString());
        this.setMessageLine(this.MSG_CLEAN.replace("<NUM>", bombCount.toString()));
      }
    }
  }

  automaticallyClearing(step) {
    this.setSign(step, this.BOARD_CLEAN);
    let collectionOfSteps = [];
    let matrix = this.BOARD_MATRIX[step[0]][step[1]];
    for (let element of matrix) {
      if (this.BOARD_MAP[element[0]][element[1]] === this.BOARD_SPACE) {
        collectionOfSteps.push([element[0], element[1]]);
      }
    }
    if (collectionOfSteps.length > 0) {
      for (let collectedStep of collectionOfSteps) {
        this.takeStep(collectedStep);
      }
    }
  }

  markSquare(marks) {
    for (let mark of marks) {
      this.setSign(mark, this.BOARD_MARK);
    }
    this.setMessageLine(this.MSG_MARK);
  }

  isBomb(step) {
    return this.BOARD_MAP[step[0]][step[1]] === this.BOARD_BOMB;
  }

  getBombCount(step) {
    let bombCount = 0;

    let matrix = this.BOARD_MATRIX[step[0]][step[1]];
    for (let element of matrix) {
      if (this.BOARD_MAP[element[0]][element[1]] === this.BOARD_BOMB) {
        bombCount++;
      }
    }
    return bombCount;
  }

  drawBoard() {
    return this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([0, 0]) +
      this.BOARD_COLUMN + this.determineSign([0, 1]) +
      this.BOARD_COLUMN + this.determineSign([0, 2]) +
      this.BOARD_COLUMN + this.BOARD_NEW_LINE +
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([1, 0]) +
      this.BOARD_COLUMN + this.determineSign([1, 1]) +
      this.BOARD_COLUMN + this.determineSign([1, 2]) +
      this.BOARD_COLUMN + this.BOARD_NEW_LINE +
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.BOARD_COLUMN + this.determineSign([2, 0]) +
      this.BOARD_COLUMN + this.determineSign([2, 1]) +
      this.BOARD_COLUMN + this.determineSign([2, 2]) +
      this.BOARD_COLUMN + this.BOARD_NEW_LINE +
      this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
      this.getBoardMsgLine();
  }

  setSign(step, sign) {
    this.BOARD_MAP[step[0]][step[1]] = sign;
  }

  determineSign(step) {
    if (this.BOARD_MAP[step[0]][step[1]] === this.BOARD_BOMB) {
      return this.BOARD_SPACE;
    }
    return this.BOARD_MAP[step[0]][step[1]];
  }
}
module.exports = {
  Application,
};

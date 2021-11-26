class Application {
  
  BOARD_HORIZONTAL_LINE = "+-+-+-+";
  BOARD_COLUMN = "|";
  BOARD_NEW_LINE = "\n";
  BOARD_MSG_LINE = "";
  BOARD_MAP = [[]];
  BOARD_SPACE = " ";
  BOARD_BOOM = "X";
  BOARD_BOMB = "B";

  MSG_CREATE = "[Sandbox 3x3] Game created";
  MSG_BOOM = "[Sandbox 3x3] BOOM! – Game Over.";
  MSG_CLEAN = "[Sandbox 3x3] 3 bombs around your square.";


  constructor(inputMap) {
    if (inputMap==null) {
      this.BOARD_MAP = [
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE],
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE],
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE]
    ];
  } else {
    this.BOARD_MAP = inputMap;
  }
    this.setMessageLine(this.MSG_CREATE);
  }

  setMessageLine(msg){
    this.BOARD_MSG_LINE = msg;
  }

  takeStep(step) {
    if (this.isBomb(step)) {
       this.setSign(step, this.BOARD_BOOM);
       this.setMessageLine(this.MSG_BOOM);
    } else {
      this.setSign(step, "3");
      this.setMessageLine(this.MSG_CLEAN);
    }

  }

  isBomb(step){
    return this.BOARD_MAP[step[0]][step[1]] === this.BOARD_BOMB;
  }

  drawBoard() {
    return this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.determineSign([0,0]) + 
    this.BOARD_COLUMN + this.determineSign([0,1]) + 
    this.BOARD_COLUMN + this.determineSign([0,2]) + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.determineSign([1,0]) + 
    this.BOARD_COLUMN + this.determineSign([1,1]) + 
    this.BOARD_COLUMN + this.determineSign([1,2]) + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.determineSign([2,0]) + 
    this.BOARD_COLUMN + this.determineSign([2,1]) +  
    this.BOARD_COLUMN + this.determineSign([2,2]) + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_NEW_LINE + this.BOARD_MSG_LINE;
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

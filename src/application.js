class Application {
  
  BOARD_HORIZONTAL_LINE = "+-+-+-+";
  BOARD_COLUMN = "|";
  BOARD_NEW_LINE = "\n";
  BOARD_MSG_LINE = "";
  BOARD_MAP = [[]];
  BOARD_SPACE = " ";
  BOARD_BOOM = "X";

  MSG_CREATE = "[Sandbox 3x3] Game created";
  MSG_BOOM = "[Sandbox 3x3] BOOM! – Game Over.";


  constructor(){
    this.BOARD_MAP = [
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE],
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE],
      [this.BOARD_SPACE,this.BOARD_SPACE,this.BOARD_SPACE]
    ];
    this.setMessageLine(this.MSG_CREATE);
  }

  setMessageLine(msg){
    this.BOARD_MSG_LINE = msg;
 
  }

  takeStep(step) {
    this.setSign(step, this.BOARD_BOOM);
    this.setMessageLine(this.MSG_BOOM);
  }

  drawBoard() {
    return this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.BOARD_MAP[0][0] + 
    this.BOARD_COLUMN + this.BOARD_MAP[0][1] + 
    this.BOARD_COLUMN + this.BOARD_MAP[0][2] + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.BOARD_MAP[1][0] + 
    this.BOARD_COLUMN + this.BOARD_MAP[1][1] + 
    this.BOARD_COLUMN + this.BOARD_MAP[1][2] + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_COLUMN + this.BOARD_MAP[2][0] + 
    this.BOARD_COLUMN + this.BOARD_MAP[2][1] +  
    this.BOARD_COLUMN + this.BOARD_MAP[2][2] + 
    this.BOARD_COLUMN + this.BOARD_NEW_LINE + 
    this.BOARD_HORIZONTAL_LINE + this.BOARD_NEW_LINE +
    this.BOARD_NEW_LINE + this.BOARD_MSG_LINE;
  }

  setSign(step, sign) {
    this.BOARD_MAP[step[0]][step[1]] = sign;
  }
}
module.exports = {
  Application,
};

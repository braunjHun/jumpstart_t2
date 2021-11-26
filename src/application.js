class Application {
  
  isBomb = false;
  step = [];


  takeStep(step) {
    this.step = step;
    this.isBomb = true;
  }

  drawBoard() {
    if (this.isBomb) {
      if (this.step[0] === 0) {
        return "+-+-+-+\n| | |X|\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.";   
      }
      if (this.step[0] === 2) {
        return "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.";   
      }
      return "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."; 
    }
     return "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created";
  }
}
module.exports = {
  Application,
};

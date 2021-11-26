class Application {
  
  isBomb = false;


  takeStep() {
    this.isBomb = true;
  }

  drawBoard() {
    if (this.isBomb) {
      return "+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over."; 
    }
     return "+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created";
  }
}
module.exports = {
  Application,
};

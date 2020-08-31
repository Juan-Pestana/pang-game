const pangApp = {
  name: "Pang Game",
  author: "Damián Lago & Juan Pestana",
  version: "1.0.0",
  license: undefined,
  description: "Arcade video game made using Canvas",
  canvasId: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined,
  },
  ballSizw: {
    x: undefined,
    y: undefined,
  },
  x: undefined,
  y: undefined,
  ballRadius: undefined,
  init(id) {
    this.canvasId = id;
    this.ctx = document.getElementById(this.canvasId).getContext("2d");
    this.setDimensions();
    this.setEventHandlers();
    this.drawTest();
    console.log("Este es el objeto", this.ctx);
  },
  setDimensions() {
    document
      .getElementById(this.canvasId)
      .setAttribute("width", window.innerWidth);
    document
      .getElementById(this.canvasId)
      .setAttribute("height", window.innerHeight);
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  },
  setEventHandlers() {
    window.onresize = () => this.setDimensions();
  },
  drawTest() {
    ballradius = 10;
    this.ctx.beginPath();
    this.ctx.arc(100, 100, ballradius, 0, Math.PI * 2);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
    this.ctx.closePath();
  },
};

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
  BigBall : [],
  mediumBalls : [],
  init(id) {
    this.canvasId = id;
    this.ctx = document.getElementById(this.canvasId).getContext("2d");
    this.setDimensions();
    this.setEventHandlers();
    this.createNewBall()
    this.drawAll()
    console.log(this.BigBall)
    console.log("Este es el objeto", this.ctx);
  },
  drawAll(){
    const interval = setInterval(() => {
      this.clearScreen()
      this.BigBall.length >= 1 ? this.BigBall[0].draw() : null
      this.createMediumBall()
      this.mediumBalls.length >= 1 ? this.mediumBalls.forEach(elem => elem.draw()) : null
      
      
      
      
    },20)
    
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

  createNewBall() {
    let ball = new Ball(this.ctx, this.canvasSize)
    this.BigBall.push(ball)
},
clearScreen() {
  this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
},

// collision(){
//   if(this.BigBall[0].ballPos.x <= 0){
  
//   } 
// },

createMediumBall(){
  this.BigBall.forEach(elem =>{
    if(elem.ballPos.x <=0){
      let index = this.BigBall.indexOf(elem)
      let mBall = new MediumBall(this.ctx, this.canvasSize, elem.ballPos.x, elem.ballPos.y, elem.ballSize.w /2, elem.ballSize.h /2)
      this.mediumBalls.push(mBall)
      this.BigBall.splice(index,1)
     console.log(this.mediumBalls)
    }
  })
  // if(this.BigBall[0].ballPos.x <= 0){
    
  } 
  


};

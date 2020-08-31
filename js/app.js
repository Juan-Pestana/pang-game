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
  player : undefined,
  gun : undefined,
  shots : [],
  BigBall : [],
  mediumBalls : [],

  init(id) {
    this.canvasId = id;
    this.ctx = document.getElementById(this.canvasId).getContext("2d");
    this.setDimensions();
    this.setEventListeners()
    this.setEventHandlers();
    this.createNewBall()
    this.createPlayer()
       
    this.drawAll()
    console.log(this.BigBall)
    console.log("Este es el objeto", this.ctx);
  },
  drawAll(){
    const interval = setInterval(() => {
      this.clearScreen()
      if (this.shots.length >= 1) this.shots.forEach(elem =>{
        elem.draw()
        elem.move()
      } )
      this.BigBall.length >= 1 ? this.BigBall[0].draw() : null
      this.createMediumBall()
      this.mediumBalls.length >= 1 ? this.mediumBalls.forEach(elem => elem.draw()) : null
      this.player.draw()
      this.clearShots()
      
    
      
      
      
      
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
  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === 37 ? this.player.move('left') : null;
      e.keyCode === 39 ? this.player.move('right') : null;
      e.keyCode === 32 ? this.createShot() : null;
    }
  },
  createShot(){
    let shot = new Shot (this.ctx, this.canvasSize, this.player.playerPos.x)
    this.shots.push(shot)
    console.log(this.shots)
  },

  createPlayer(){
    this.player = new Player(this.ctx, this.canvasSize)
  },

  createNewBall() {
    let ball = new Ball(this.ctx, this.canvasSize)
    this.BigBall.push(ball)
},

  clearShots(){
    this.shots.forEach(elem =>{
      if (elem.position.y < this.canvasSize.h * -1){
        let index = this.shots.indexOf(elem)
        this.shots.splice(index, 1)
      }
    })
  },  
clearScreen() {
  this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
},


createMediumBall(){
  this.BigBall.forEach(elem =>{
    if(elem.ballPos.x <=0){
      let index = this.BigBall.indexOf(elem)
      let mBall = new MediumBall(this.ctx, this.canvasSize, elem.ballPos.x, elem.ballPos.y+5, elem.ballSize.w /2, elem.ballSize.h /2, -7, 20)
      this.mediumBalls.push(mBall)
    
      mBall = new MediumBall(this.ctx, this.canvasSize, elem.ballPos.x, elem.ballPos.y, elem.ballSize.w /2, elem.ballSize.h /2, -13, 20)
      this.mediumBalls.push(mBall)
      this.BigBall.splice(index,1)
     console.log(this.mediumBalls)
    }
  })
  // if(this.BigBall[0].ballPos.x <= 0){
    
  } 
  


};

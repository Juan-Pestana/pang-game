class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerSize = {
            w: 100,
            h: 180
        }
        this.playerPos = {
            x: this.canvasSize.w /2,
            y: this.canvasSize.h - this.playerSize.h
        }
        
        
    

        this.imageInstance = undefined

        this.init()
        
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/car.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }

    move(dir) {
        dir === 'left' ? this.playerPos.x -= 7 : null
        dir === 'right' ? this.playerPos.x += 7 : null
        this.carPos.x > this.canvasSize.w - this.playerSize.w -10 ? this.playerPos.x -=10 : null
        this.playerPos.x < 10 ? this.playerPos.x += 10 : null
    }
 

  }
const pangApp = {
    name: 'Pang Game',
    author: 'Damián Lago & Juan Pestana',
    version: '1.0.0',
    license: undefined,
    description: 'Arcade video game made using Canvas',
    canvasId: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ballSizw: {
        x: undefined,
        y: undefined,
    },
    init(id) {
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.setDimensions()
        this.setEventHandlers()
        this.drawTest()
        this.moveTest()
        console.log('Este es el objeto', this.ctx)
    },
    setDimensions() {
        document.getElementById(this.canvasId).setAttribute('width', window.innerWidth)
        document.getElementById(this.canvasId).setAttribute('height', window.innerHeight)
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    },
    setEventHandlers() {
        window.onresize = () => this.setDimensions()
    },
    drawTest() {
        dx = 2
        dy = -2
        x = this.canvasSize.w / 2
        y = this.canvasSize.h - 30
        ballRadius = 10
        this.ctx.beginPath();
        this.ctx.arc(x, y, 100, 10, Math.PI * 2);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    },
    moveTest() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);

        if (x + dx > this.canvasSize.w - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy > this.canvasSize.h - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }
}
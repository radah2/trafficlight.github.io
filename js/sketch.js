
var sketch1 = function(p) {

    var points = []
    var mult = 0.005

    p.setup = function() {

        var canvas = p.createCanvas(1420, 760)
        canvas.parent('lines')

        p.background(30)
        p.angleMode(p.DEGREES)
        p.noiseDetail(1)
        height = 1420
        width = 1420
        var density = 50
        var space = width / density

        for (var x = 0; x < width; x += space) {
            for (var y = 0; y < height; y += space) {
                var g = p.createVector(x + p.random(-10, 10), y +
                    p.random(-10, 10))
                points.push(g)
            }
        }

    }


    p.draw = function() {


        if (p.mouseIsPressed) {

        } else {

            p.noStroke()

            for (var i = 0; i < points.length; i++) {

                var r = p.map(points[i].x, 0, width, 50, 255)
                var g = p.map(points[i].y, 0, height, 50, 255)
                var b = p.map(points[i].x, 0, width, 255, 50)

                p.fill(r, g, b)

                var angle = p.map(p.noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

                points[i].add(p.createVector(p.cos(angle), p.sin(angle)))

                p.ellipse(points[i].x, points[i].y, 0.5)

            }
        }

    }

}


var sketch2 = function(p) {

    p.setup = function() {

        var canvas = p.createCanvas(1420, 760, p.WEBGL)
        p.angleMode(p.DEGREES)
        canvas.parent('waves');
    }

    p.draw = function() {

        p.background(30)
        p.rotateX(60)
        p.noFill()
        p.stroke(300)


        for (var i = 0; i < 30; i++) {
            var r = p.map(p.sin(p.frameCount / 2), -1, 1, 100, 200)
            var g = p.map(i, 0, 20, 0, 255)
            var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)

            p.stroke(r, g, b)

            p.rotate(2)

            p.beginShape()
            for (var j = 0; j < 360; j += 90) {
                var rad = i * 10
                var x = rad * p.cos(j)
                var y = rad * p.sin(j)
                var z = p.sin(p.frameCount * 2 + i * 10) * 80

                p.vertex(x, y, z)

            }
            p.endShape(p.CLOSE)
        }

        if (p.mouseIsPressed) {


            for (var i = 0; i < 30; i++) {
                var r = p.map(p.sin(p.frameCount / 2), -1, 1, 100, 200)
                var g = p.map(p.i, 0, 20, 0, 255)
                var b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)

                p.stroke(r, g, b)
                p.rotate(2)

                p.beginShape()
                for (var j = 0; j < 360; j += 90) {
                    var rad = i * 10
                    var x = rad * p.cos(j)
                    var y = rad * p.sin(j)
                    var z = p.sin(p.frameCount * 2 + i * 10) * 80


                    p.vertex(x, y, z)

                }
                p.endShape(p.CLOSE)
            }
        }
    }
}




let particles = [];
var sketch3 = function(p) {

    p.setup = function() {

        var canvas = p.createCanvas(1420, 760)
        canvas.parent('circles')
    }

    p.draw = function() {

        if (p.mouseIsPressed) {
            p.background(255, 255, 255);
            for (let i = 0; i < 5; i++) {
                let p = new Particle();
                particles.push(p);
            }
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].show1();
                if (particles[i].finish()) {
                    particles.splice(i, 1);
                }
            }
        } else {
            p.background(30);

            for (let i = 0; i < 5; i++) {
                let p = new Particle();
                particles.push(p);
            }
            for (let i = particles.length - 5; i >= 0; i--) {
                particles[i].update();
                particles[i].show();
                if (particles[i].finish()) {
                    particles.splice(i, 1);
                }
            }

        }

    }



    class Particle {

        constructor() {
            this.x = p.mouseX;
            this.y = p.mouseY;
            this.vx = p.random(-1, 1);
            this.vy = p.random(-1, 3);
            this.d = p.random(100, 23);
            this.acc = 0.1;
            this.alpha = 300;

        }

        update() {
            this.vy = this.vy - this.acc;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= 5;
        }

        finish() {
            return this.alpha < 30;
        }

        show() {
            p.stroke(3, p.random(80, 190), 0, this.alpha);
            p.fill(30)
            p.circle(this.x, this.y, this.d)
        }

        show1() {
            p.stroke(p.mouseX, p.random(80, 190), p.mouseY, this.alpha);
            p.fill(30)
            p.circle(this.x, this.y, this.d)

        }

    }



}




var myfirstsketch = new p5(sketch1)
var mysecondsketch = new p5(sketch2)
var mythirdketch = new p5(sketch3)
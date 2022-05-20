class Rectangle {
    width;
    height;
    constructor (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getArea () {
       let area;
       return area = this.width * this.height;
    }

    getPerameter () {
        let perameter;
        return perameter = 2 * (this.width + this.height);
    }

    getRandomHex() {
        return Math.floor(Math.random()*255);
    }

    getRandomColor() {
        let red = this.getRandomHex();
        let green = this.getRandomHex();
        let blue = this.getRandomHex();
        return "rgb(" + red + "," + blue + "," + green +")";
    }
}
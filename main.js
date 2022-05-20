function rectangle(){
    Rectangle1 = new Rectangle ();
    
    
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    let color = Rectangle1.getRandomColor();
    Rectangle1.x = Rectangle1.getRandomHex();
    Rectangle1.y = Rectangle1.getRandomHex();
    Rectangle1.width = Rectangle1.getRandomHex()+40;
    Rectangle1.height = Rectangle1.getRandomHex()+40;

    let chuvi = Rectangle1.getPerameter();
    let dientich = Rectangle1.getArea();
    document.getElementById("result").innerHTML = 
    "Chu vi hình chữ nhật là " + chuvi + "<br>" + "Diện tích hình chữ nhật " + dientich +  "<br>";    

    ctx.beginPath();
    ctx.rect(Rectangle1.x, Rectangle1.y, Rectangle1.width, Rectangle1.height);
    ctx.fillStyle = color;
    ctx.fill();
}
// write your code here
var image = new SimpleImage("dinos.png");
var width = image.getWidth();
var height = image.getHeight();

for (var pixel of image.values()) {
    if (pixel.getX() <= width/3) {
        pixel.setRed(255);
    }
    else if (width/3 < pixel.getX() && pixel.getX() <= width*(2/3)) {
        pixel.setGreen(255);
    }
    else {
        pixel.setBlue(255);
    }
}

print(image);
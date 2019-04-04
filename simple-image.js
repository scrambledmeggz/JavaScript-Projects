var image = new SimpleImage("duke_blue_devil.png");


function redGreenBlue(image) {
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
}

function swapRedGreen(pixel) {
    var redVal = pixel.getRed();
    var greenVal = pixel.getGreen();
    pixel.setRed(greenVal);
    pixel.setGreen(redVal);
    return pixel;
}

function blueToYellow(image) {
    var width = image.getWidth();
    var height = image.getHeight();
    for (var pixel of image.values()) {
        if (pixel.getRed() != 255 && pixel.getGreen() != 255 && pixel.getBlue() != 255) {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
    }
    return image;
}

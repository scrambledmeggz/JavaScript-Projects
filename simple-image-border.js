var image = new SimpleImage("smallpanda.png");

function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}

function addBorder(image, thickness) {
    var width = image.getWidth();
    var height = image.getHeight();
    for (var pixel of image.values()) {
        if (pixel.getX() <= thickness || pixel.getX() >= (width - thickness)) {
            pixel = setBlack(pixel);
        }
        if (pixel.getY() <= thickness || pixel.getY() >= (height - thickness) ) {
            pixel = setBlack(pixel);
        }
        else {
            continue;
        }
    }
    return image;
}

print(addBorder(image,10));
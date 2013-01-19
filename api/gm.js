var gm = require("gm"), fs = require("fs");
    
var basePath = "/img/";
var maxDimension = 800;
var maxThumbDimension = 170;
var thumbQuality = 90;

var processImages = function(images){
    images.forEach(function (image, imageIndex){
        var fullPath = basePath + image;
        var newFilename = basePath + "scaled/" + image;
        gm(fullPath).size(
            function(err, value){
                var newWidth = value.width, newHeight = value.height, ratio = 1;
                if (value.width > maxDimension || value.height > maxDimension){
                    if (value.width > maxDimension){
                        ratio = maxDimension / value.width
                    }
                    else if (value.height > maxDimension) ratio = maxDimension / value.height;
                    newWidth = value.width * ratio;
                    newHeight = value.height * ratio;
                }

                if (newWidth != value.width){
                    console.log("resizing " + image + " to " + newWidth + "x" + newHeight);
                    gm(fullPath).resize(newWidth, newHeight).write(newFilename,
                        function(err){
                            if (err) console.log("Error: " + err);
                            console.log("resized " + image + " to " + newWidth + "x" + newHeight);
                        });
                }
                else copyTheFileToScaledFolder();
            }
        );}
    );
}

var getImages = function(){
    fs.readdir(basePath, function(err, files){
        processImages(files);
    });
}

getImages();
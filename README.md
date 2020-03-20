# [Test Image API](https://github.com/HaNdTriX/test-image-api)

Pixel perfect test image api.

## Syntax

`<width>x<height>.<format>?<option>`

### Options

#### width

Type: `Number`  
Default: `200`  
Max: `5000`

#### height

Type: `Number`  
Default: `width`  
Max: `5000`

#### format

Type: `Enum`  
Values: `jpg, jpeg, png, webp, tiff, heif`  
Default: `png`

#### quality

Type: `Number`  
Default: `80`


## Examples

* [300x300.png](/300x300.png)
* [200.png](/200.png)
* [1000.jpg](/1000.jpg)
* [1000.jpeg](/1000.jpeg)
* [600.webp](/600.webp)
* [123x123.webp](/123x123.webp)
* [123x123.tiff](/123x123.tiff)
* [123x123.heif](/123x123.heif)
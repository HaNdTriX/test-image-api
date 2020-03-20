# [Test Image API](https://github.com/HaNdTriX/test-image-api)

Pixel perfect test image api.

## Syntax

```
image/<width>x<height>.<format>?<option>
```

### Options

#### width

Type: `Number`\
Default: `200`
Max: `5000`

#### height

Type: `Number`\
Default: `width`
Max: `5000`

#### format

Type: `jpg, jpeg, png, webp, tiff, heif`\
Default: `png`

#### quality

Type: `Number`\
Default: `80`


## Examples

* [image/300x300.png](/image/300x300.png)
* [image/200.png](/image/200.png)
* [image/1000.jpg](/image/1000.jpg)
* [image/1000.jpeg](/image/1000.jpeg)
* [image/600.webp](/image/600.webp)
* [image/123x123.webp](/image/123x123.webp)
* [image/123x123.tiff](/image/123x123.tiff)
* [image/123x123.heif](/image/123x123.heif)
const sharp = require("sharp");
const path = require("path");
const tilePath = path.join(__dirname, "../tile.png");

module.exports = async (req, res) => {
  let { left, top, width, height, format, quality } = req.query;

  // Prepare params
  quality = Number(quality) || 80;
  top = Number(top) || 0;
  left = Number(left) || 0;
  width = Number(width) || Number(height) || 200;
  height = Number(height) || Number(width) || 200;
  format = ["jpeg", "png", "webp", "tiff", "heif"].includes(format)
    ? format
    : "png";

  // Handle invalid params
  if (width > 5000 || height > 5000) {
    res.status = 400;
    res.send("400 Bad Request");
    return;
  }

  // Creat pipeline
  const pipeline = sharp(tilePath).extract({
    left,
    top,
    width,
    height
  });

  // Add label & center
  pipeline.composite([
    {
      input: Buffer.from(
        `<svg 
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
          >
            <line
              x1="${width / 2}"
              y1="${0}"
              x2="${width / 2}"
              y2="${height}"
              stroke="orange"
              stroke-width="3"
              stroke-dasharray="10 5"
            />
            <line
              x1="${0}"
              y1="${height / 2}"
              x2="${width}"
              y2="${height / 2}"
              stroke="orange"
              stroke-width="3"
              stroke-dasharray="10 5"
            />
          </svg>`
      )
    }
  ]);

  // Convert to right format
  pipeline.toFormat(format);

  // Send reponse
  pipeline.pipe(res);
};

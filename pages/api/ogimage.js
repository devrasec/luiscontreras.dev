import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';

/**
 * Split a given string into an array of strings with a specific length.
 * The strings ar cut preserving the words intact.
 *
 * @param {string} str The string to split.
 * @param {number} maxWidth The maximum length of characters.
 */
const wordWrap = (str, maxWidth) => {
  // Regular expression from https://stackoverflow.com/a/51506718
  const regex = new RegExp(`(?![^\\n]{1,${maxWidth}}$)([^\\n]{1,${maxWidth}})\\s`, 'g');
  const wrappedText = str.replace(regex, '$1\n');

  return wrappedText.split('\n');
};

export default async function handler(req, res) {
  const {
    query: { text },
  } = req;

  if (!text) {
    res.status(400).json({ message: 'Missing "text" query param.' });
    return;
  }

  registerFont(path.resolve('./assets/Montserrat-Bold.ttf'), {
    family: 'Montserrat',
    weight: 700,
    style: 'normal',
  });
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');

  const image = await loadImage(path.resolve('./assets/images/og-image-background.jpg'));
  ctx.drawImage(image, 0, 0, 1200, 630);

  ctx.font = 'normal normal 700 54px Montserrat';
  const linesOfText = wordWrap(text, 28);
  ctx.fillStyle = '#FFFFFF';
  // The y coordinate where the text should be.
  let y = 300;
  const lineHeight = 54 * 1.3;

  linesOfText.forEach(line => {
    const textWidth = ctx.measureText(line).width;
    // Render the text line centered on the canvas.
    ctx.fillText(line, (1200 - textWidth) / 2, y);
    // Increment the y coordinate for the next line.
    y += lineHeight;
  });

  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.75, progressive: false });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpeg');
  res.end(buffer);
}

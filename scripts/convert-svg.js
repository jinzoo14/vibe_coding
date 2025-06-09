const sharp = require('sharp');
const path = require('path');

const svgPath = path.join(__dirname, '../docs/assets/calculator-ui.svg');
const pngPath = path.join(__dirname, '../docs/assets/calculator-ui.png');

async function convertSvgToPng() {
  try {
    await sharp(svgPath)
      .png()
      .resize(640, 1024) // 2x 크기로 리사이즈
      .toFile(pngPath);
    
    console.log('SVG를 PNG로 성공적으로 변환했습니다.');
    console.log('생성된 파일:', pngPath);
  } catch (error) {
    console.error('변환 중 오류가 발생했습니다:', error);
  }
}

convertSvgToPng(); 
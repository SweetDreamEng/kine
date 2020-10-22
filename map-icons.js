const { readdirSync, writeFileSync } = require('fs');

// some helpful functions
const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split('.')[0];
const toPascalCase = (string) =>
  string
    .match(/[a-z]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');

// getting all the icons
const icons = readdirSync('./src/assets/icons').filter(isSVG).map(removeExtension);

const indexContent = [
  "import React from 'react';",
  "import Icon from './IconComponent';",
  '',
  icons
    .map(
      (icon) =>
        `export const ${toPascalCase(icon)} = props => <Icon {...props} name="${icon}" />;`,
    )
    .join('\n'),
].join('\n');

writeFileSync(`./src/components/Icon/index.js`, indexContent);
console.log('Icon component file created! ✅');

const iconMapContent = [
  icons
    .map((icon) => `import { ReactComponent as ${toPascalCase(icon)} } from './${icon}.svg';`)
    .join('\n'),
  '',
  'export default {',
  icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join('\n'),
  '};',
].join('\n');

writeFileSync(`src/assets/icons/icon-map.js`, iconMapContent);
console.log('Web Icon Map created! ✅');

const iconStory = [
  "import React from 'react';",
  "import { IconGallery } from 'storybook-icon-gallery';",
  icons.map((icon) => `import { ${toPascalCase(icon)} } from './index';`).join('\n'),
  '',
  `export default {\n
      title: 'All Icons',\n
    };`,
  '',
  'export const Icons = () => {',
  `return (\n
      <div style={{ padding: '100px', background:'#F0F0F0' }} >`,
  '<IconGallery>',
  icons
    .map(
      (icon) =>
        `<IconGallery.Variants name="${toPascalCase(icon)}">
        <IconGallery.Variant>
          <${toPascalCase(icon)} height="50px" width="50px" className="icon"/>
        </IconGallery.Variant>
      </IconGallery.Variants>`,
    )
    .join('\n'),
  '</IconGallery>',
  `</div>`,
  `);`,
  `};`,
].join('\n');

writeFileSync(`src/components/Icon/IconStories.js`, iconStory);
console.log('Icons Story created! ✅');

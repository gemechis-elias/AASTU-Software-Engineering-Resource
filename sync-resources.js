const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../resources');
const targetDir = path.resolve(__dirname, './website/docs');

function syncResources(source, target) {
  fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      syncResources(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

syncResources(sourceDir, targetDir);
console.log('✅ Resources synced to website/docs successfully!');

const fs = require('fs');
const path = require('path');

// Use absolute paths
const sourceDir = path.resolve(__dirname, './resources');
const targetDir = path.resolve(__dirname, './website/docs');

console.log('Source Directory:', sourceDir);
console.log('Target Directory:', targetDir);

function syncResources(source, target) {
  if (!fs.existsSync(source)) {
    console.error(`Source directory "${source}" does not exist.`);
    process.exit(1);
  }
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
console.log('✅ Resources synced successfully!');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomFileName = void 0;
const generateRandomFileName = (fileFullName) => {
    const [fileName, fileExt] = fileFullName.split('.');
    const chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890`;
    let randomName = '';
    for (let i = 0; i <= 30; i++) {
        randomName += chars[Math.floor(Math.random() * chars.length)];
    }
    return `${fileName}-${randomName}.${fileExt}`;
};
exports.generateRandomFileName = generateRandomFileName;
//# sourceMappingURL=files.util.js.map
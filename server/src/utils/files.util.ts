export const generateRandomFileName = (fileFullName: string): any => {
  const [fileName, fileExt] = fileFullName.split('.');
  const chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890`;
  let randomName = '';
  for (let i = 0; i <= 30; i++) {
    randomName += chars[Math.floor(Math.random() * chars.length)];
  }

  return `${fileName}-${randomName}.${fileExt}`;
};

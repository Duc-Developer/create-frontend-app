export const generateGUID = (): string => {
  const timestamp = new Date().getTime();
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return template.replace(/[xy]/g, (char) => {
    const random = (timestamp + Math.random() * 16) % 16 | 0;
    return (char === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
};

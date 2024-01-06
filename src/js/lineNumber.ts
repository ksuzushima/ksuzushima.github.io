export const setLineNumber = (): void => {
  const lines = document.querySelectorAll('.line-number');

  lines.forEach((line, index) => {
    const lineNumber = index === lines.length - 1 ? '🐈' : index + 1;
    line.setAttribute('value', lineNumber.toString());
  });
};

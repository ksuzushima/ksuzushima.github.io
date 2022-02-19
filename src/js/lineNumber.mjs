export const setLineNumber = () => {
  const lines = document.querySelectorAll(".line-number");
  lines.forEach((line, i) => {
    if (i === lines.length - 1) {
      lineNumber.setAttribute("value", "🐈");
    } else {
      lineNumber.setAttribute("value", i + 1);
    }
  });
};

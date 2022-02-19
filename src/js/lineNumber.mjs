export const setLineNumber = () => {
  const lineNumbers = document.querySelectorAll(".line-number");
  lineNumbers.forEach((lineNumber, i) => {
    lineNumber.setAttribute("value", i + 1);
  });
};

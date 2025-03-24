export const maskInput = (mask: string, text: string, customChar = "#") => {
  let newText = "";
  let length = 0;

  for (const maskPosition in mask.split("")) {
    if (length >= text.length) break;
    newText +=
      customChar === mask[maskPosition] ? text[length] : mask[maskPosition];

    if (newText[maskPosition] !== mask[maskPosition]) {
      length++;
    }
  }

  return newText;
};

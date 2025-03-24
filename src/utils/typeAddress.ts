export const addressTypes = {
  work: {
    value: "trabalho",
    color: "#F988E4",
  },
  home: {
    value: "casa",
    color: "#8D71CE",
  },
};

export const getTypeAddress = (key: keyof typeof addressTypes) => {
  const result = addressTypes[key];

  return { value: result.value, color: result.color };
};

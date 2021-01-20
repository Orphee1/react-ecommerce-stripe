export const formatPrice = (num) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(num / 100);
};

export const getUniqueValues = (data, type) => {
  let values = data.map((item) => item[type]);
  if (type === "colors") {
    values = values.flat();
  }
  return ["all", ...new Set(values)];
};

export const formatValue = (value) => {
  if (value === null || value === undefined) {
    return "-";
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "-";
    }

    return value.join(", ");
  }

  if (typeof value === "object") {
    return JSON.stringify(value);
  }

  return String(value);
};

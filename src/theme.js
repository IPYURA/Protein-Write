export const mainTheme = {
  bgColor: "#ffd6df",
  textColor: "#1a1a1a",
  softTextColor: "#614e4e",
  subColor: "#fff0e8",
  deleteButtonColor: "#ffccd7",
  plusButtonColor: "#ffd6d3",
  shadow: "0px 1px 3px rgba(0,0,0,0.2)",
};

export const calculateBarWidth = (max, cur) => {
  const check = Number(max) - cur;
  return check > 0 ? (cur / max) * 100 : 100;
};

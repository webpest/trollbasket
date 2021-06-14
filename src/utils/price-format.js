export const formatPrice = (num) => {
  if (num !== undefined && num !== null) {
    return "N " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return;
};

export const phoneRegex = new RegExp(
/^0?9[0-9]{9}$/);

export const validateMobile = (mobile: string) => {
  return phoneRegex.test(mobile);
};
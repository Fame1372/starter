export const validateNationalCode = (nationalCode: string) => {
  if (nationalCode.length !== 10) {
    return false;
  }
  const allDigitEqual = [
    "0000000000",
    "1111111111",
    "2222222222",
    "3333333333",
    "4444444444",
    "5555555555",
    "6666666666",
    "7777777777",
    "8888888888",
    "9999999999",
  ];

  if (allDigitEqual.includes(nationalCode)) {
    return false;
  }

  let sum = 0;
  const length = 10;

  for (let i = 0; i < length - 1; i++) {
    sum += parseInt(nationalCode.charAt(i)) * (length - i);
  }

  const r = parseInt(nationalCode.charAt(9));
  const c = sum % 11;

  return (c < 2 && r === c) || (c >= 2 && 11 - c === r);
};

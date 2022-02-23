const assetPrice = (value: number): string | null => {
  if (value) {
    // seperates numbers after and before decimal
    const parsedNumber = value.toString().split('.');

    // gets first two non-zero numbers after decimal (e.g. 0.0000000014)
    if (parsedNumber[0] === '0') {
      // puts all numbers after decimal in array
      const parsedDecimalNums = parsedNumber[1].split('');

      for (let i = 0; i < parsedDecimalNums.length; i += 1) {
        if (parsedDecimalNums[i] !== '0') {
          return `0.${parsedDecimalNums.slice(0, i + 2).join('')}`;
        }
      }
    }

    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return null;
};

export default assetPrice;

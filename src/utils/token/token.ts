import { GlobalTheme } from '@/UI';

// Helper function for emotionjs
const token = ((): any => {
  const tokenAliases = [['fs', 'fontSizes']];
  const tokenEntries = Object.entries(GlobalTheme);
  for (let i = 0; i < tokenEntries.length; i += 1) {
    const tokenVal = { ...tokenEntries[i][1] };
    tokenEntries[i][1] = (key: string) =>
      key.split('.').reduce((o: any, j) => o[j], tokenVal);
  }

  for (let i = 0; i < tokenEntries.length; i += 1) {
    tokenAliases.forEach((alias) => {
      if (alias[1] === tokenEntries[i][0]) {
        tokenEntries.push([alias[0], tokenEntries[i][1]]);
      }
    });
  }

  return Object.fromEntries(tokenEntries);
})();

export default token;

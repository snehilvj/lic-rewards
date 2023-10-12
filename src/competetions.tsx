export const TyohaarKUphaar = (amount: number) => {
  let res;
  if (amount < 1e5) {
    res = 0;
  } else if (amount < 2 * 1e5) {
    res = 300;
  } else if (amount < 5 * 1e5) {
    res = 750;
  } else if (amount < 11 * 1e5) {
    res = 2500;
  } else {
    const blocks = Math.floor((amount - 11e5) / 5e5);
    res = 6000 + 3000 * blocks;
  }
  return Math.min(res, 2e5);
};

export const ToppersTop = (amount: number) => {
  let res;
  if (amount >= 10e5) {
    res = Math.round(amount / 100);
  } else {
    res = 0;
  }
  return Math.min(res, 5e7);
};

export const LuckyDraw = (amount: number) => {
  const blocks = Math.floor(amount / 10e5);
  return blocks;
};

export const GrandParty = (amount: number) => {
  if (amount >= 36e5) {
    return "With spouse + 2 extra participants";
  } else if (amount >= 31e5) {
    return "With spouse + 1 extra participant";
  } else if (amount >= 21e5) {
    return "With spouse";
  } else if (amount >= 11e5) {
    return "Single";
  } else {
    return null;
  }
};

export const RoyalEnfield = (amount: number) => {
  return amount >= 1e5;
};

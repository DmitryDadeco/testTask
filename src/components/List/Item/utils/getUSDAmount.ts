export const prepareUSDAmount = (rate: number, amount?: number): number | undefined =>
    amount ? amount * rate : undefined;

export const distanceConversion = (value) => {
    const d = Number(value)
    if (d === 0) return 0;
    if (d === 40) return 5;
    if (d === 80) return 20;
    if (d === 120) return 50;
    if (d === 160) return 100;
    if (d === 200) return 200;
}
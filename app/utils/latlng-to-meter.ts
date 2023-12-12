export const latlngToMaxMeter = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  return Math.max(
    Math.abs(lat1 - lat2) * 111000,
    Math.abs(lng1 - lng2) * 88800
  );
};

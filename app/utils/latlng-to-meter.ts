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

export const getDistanceKm = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
) => {
  const distance = Math.sqrt(
    Math.pow(lat1 - lat2, 2) + Math.pow(lng1 - lng2, 2)
  );
  return distance * 111;
};
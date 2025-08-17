const EARTH_ORBITAL_PERIOD = 31557600; // saniye (1 yıl)

const ORBITAL_PERIODS: Record<string, number> = {
  earth: EARTH_ORBITAL_PERIOD,
  mercury: EARTH_ORBITAL_PERIOD * 0.2408467,
  venus: EARTH_ORBITAL_PERIOD * 0.61519726,
  mars: EARTH_ORBITAL_PERIOD * 1.8808158,
  jupiter: EARTH_ORBITAL_PERIOD * 11.862615,
  saturn: EARTH_ORBITAL_PERIOD * 29.447498,
  uranus: EARTH_ORBITAL_PERIOD * 84.016846,
  neptune: EARTH_ORBITAL_PERIOD * 164.79132,
};

export function age(planet: string, seconds: number): number {
  const orbitalPeriod = ORBITAL_PERIODS[planet.toLowerCase()];
  if (!orbitalPeriod) {
    throw new Error('Invalid planet');
  }
  const age = seconds / orbitalPeriod;
  return Number(age.toFixed(2));
}

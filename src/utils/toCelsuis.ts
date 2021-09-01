export function toCelsius(kelvin: number) {
  return Math.round((kelvin - 273.15) * 10) / 10
}

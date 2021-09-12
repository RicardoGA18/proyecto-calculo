import hallarTiempo from '../utils/hallarTiempo'

test("Validanto funcion hallarTiempo", () => {
  expect(hallarTiempo(0,10,-9.8)).toBe(2.041)
})

import { hallarTiempo } from "./hallarTiempo"

export function hallarAlturaMax(yo,voy,g){
  const thmax = hallarTiempo(0,voy,g) / 2
  const hmax = yo + ((1/2) * voy * thmax)
  return hmax
}

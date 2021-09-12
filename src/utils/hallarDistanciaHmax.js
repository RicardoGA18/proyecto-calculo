import { hallarTiempo } from "./hallarTiempo"

export function hallarDistanciaHmax(voy,g,vox){
  const thmax = hallarTiempo(0,voy,g) / 2
  const d_hmax = vox * thmax
  return d_hmax
}
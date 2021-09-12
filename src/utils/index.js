import { hallarAlturaMax } from './hallarAlturaMax'
import { hallarTiempo } from './hallarTiempo'
import { hallarDistancia } from './hallarDistancia'
import { hallarComponentesVo } from './hallarComponentesVo'
import { hallarDistanciaHmax } from './hallarDistanciaHmax'

export function hallarCoordenadasTrayectoria(variante,xo,yo,vox,voy,vo,angulo,g){
  let t = 0, d = 0, hmax = 0, d_hmax = 0
  if (variante === 0){
    const componentes = hallarComponentesVo(vo,angulo)
    t = hallarTiempo(yo,componentes.voy,g)
    d = hallarDistancia(componentes.vox,t)
    hmax = hallarAlturaMax(yo,componentes.voy,g)
    d_hmax = hallarDistanciaHmax(componentes.voy,g,componentes.vox)
  }else{
    t = hallarTiempo(yo,voy,g)
    d = hallarDistancia(vox,t)
    hmax = hallarAlturaMax(yo,voy,g)
    d_hmax = hallarDistanciaHmax(voy,g,vox)
  }
  return [{
    x: +(xo).toFixed(3),
    y: +(yo).toFixed(3)
  },
  {
    x: +(xo + d_hmax).toFixed(3),
    y: +(hmax).toFixed(3)
  },
  {
    x: +(xo + d).toFixed(3),
    y: 0
  }]
}
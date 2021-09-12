export function hallarComponentesVo(vo,angulo){
  const vox = vo * Math.cos(angulo * (Math.PI / 180))
  const voy = vo * Math.sin(angulo * (Math.PI / 180))
  return {
    vox,
    voy,
  }
}
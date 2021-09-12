export function hallarTiempo(yo,voy,g){
  const determinante = voy**2 - (2*g*yo);
  if(determinante < 0){
    return 'Se ingresaron valores irreales'
  }
  const t1 = (-voy + (determinante)**(1/2)) / g
  if(t1 > 0){
    return +t1.toFixed(3)
  }
  const t2 = (-voy - (determinante)**(1/2)) / g
  if(t2 > 0){
    return +t2.toFixed(3)
  }
  return 'Esto no tiene sentido'
}

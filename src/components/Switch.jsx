import React from 'react'
import componentImg from '../assets/componentes.svg'
import moduloImg from '../assets/modulo.svg'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import clsx from 'clsx'

const Switch = ({variant,setVariant}) => {
  return (
    <div className="Switch">
      <h2>Seleccione los valores iniciales que utilizará</h2>
      <div className="Options">
        <button className={clsx("f-subtitle2-b",variant === 0 && "active")} onClick={() => setVariant(0)}>Vo & &#945;</button>
        <button className={clsx("f-subtitle2-b",variant === 1 && "active")} onClick={() => setVariant(1)}>Vx & Vy</button>
      </div>
      <div className="graphic">
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={variant}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            {variant === 0 ? <img src={moduloImg} alt=" " /> : <img src={componentImg} alt=" " />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}

export default Switch

import React from 'react'

const Button = ({a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}) => {
  return (

    <div className="button-container">

    <h1>  
      <button onClick={q}>Q</button>
      <button onClick={w}>W</button>
      <button onClick={e}>E</button>
      <button onClick={r}>R</button>
      <button onClick={t}>T</button>
      <button onClick={y}>Y</button>
      <button onClick={u}>U</button>
      <button onClick={i}>I</button>
      <button onClick={o}>O</button>
      <button onClick={p}>P</button>
      </h1>

    <h2>
      <button onClick={a}>A</button> 
      <button onClick={s}>S</button> 
      <button onClick={d}>D</button>
      <button onClick={f}>F</button>
      <button onClick={g}>G</button>
      <button onClick={h}>H</button>
      <button onClick={j}>J</button>
      <button onClick={k}>K</button>
      <button onClick={l}>L</button>
      </h2>  
  
    <h3>
    <button onClick={z}>Z</button>
    <button onClick={x}>X</button>
    <button onClick={c}>C</button>
    <button onClick={v}>V</button>
    <button onClick={b}>B</button>
    <button onClick={n}>N</button>
    <button onClick={m}>M</button>
    </h3> 

  </div>
  )
}

export default Button
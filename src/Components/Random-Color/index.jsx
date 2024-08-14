import { useEffect, useState } from "react";


export default function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  function createRandomNumber(length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let myColor = '#'

    for (let i = 0; i < 6; i++) {
      myColor += hex[createRandomNumber(hex.length)]
    }
    setColor(myColor)
  }
  function handleCreateRandomRgbColor(){
    const r = createRandomNumber(256)
    const g = createRandomNumber(256)
    const b = createRandomNumber(256)

    setColor(`rgb(${r},${g},${b})`)
  }
  
  useEffect(()=>{
    if(typeOfColor === 'rgb') 
      handleCreateRandomRgbColor();
    else 
      handleCreateRandomHexColor();
  }, [typeOfColor])
  
  return (
    <div style={{height: '100vh', background: color}}
      className="container">
      <button onClick={()=>setTypeOfColor('hex')}>Create HEX color</button>
      <button onClick={()=>setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor === 'hex' 
       ? handleCreateRandomHexColor
       : handleCreateRandomRgbColor}>
        Generate Random Color
      </button>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '60px',
        marginTop: '50px',
        textShadow: '1px 1px 13px black',
        gap: '15px'

      }}>
        <h5>{typeOfColor === 'rgb' ? 'RGB Color' : 'Hex Color'}:</h5>
        <h4>{color}</h4>
        </div>
    </div>
  );
}
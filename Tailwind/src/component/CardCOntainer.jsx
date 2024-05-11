import React from 'react'
import Card from './Card'

function CardCOntainer() {
  const  img1 = `https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600`;
  const myObj = {
    username:'rk',
    img2: `https://images.pexels.com/photos/7390883/pexels-photo-7390883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
  }
  return (
    <>
    <div className='flex gap-2 flex-wrap'>
    <Card username='rushabh' img={img1} btnTxt='visit me'/>
    <Card username={myObj.username} img={myObj.img2} />
    </div>
    </>
  )
}

export default CardCOntainer
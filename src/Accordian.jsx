import React, { useState } from 'react'

function Accordian({element, idx}) {
    const [isActive, setIsActive] = useState(false)

  return (
    <div className='accordian-item'>
      <div onClick={() => setIsActive(!isActive)} className='container'>
        <p className={isActive ? 'question-active' :'question'}>{element.question}</p> 
        <img className={isActive ? 'icon-active' :'icon'} src="images/icon-arrow-down.svg"/>
      </div>
      {isActive && <p className='answer' style={{display:'hidden'}}>{element.answer}</p>}
    </div>
  )
}

export default Accordian
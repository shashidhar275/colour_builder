import React from 'react'

const InputBar = ({handleSubmit,colour,setColour}) => {
  return (
    <div>
        <form className='inputForm' onSubmit={handleSubmit}>
            <input type="text" autoFocus placeholder='Add color name' value={colour} onChange={(e)=> setColour(e.target.value)}/>
        </form>
    </div>
  )
}

export default InputBar
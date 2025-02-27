import React, { useState } from 'react'

const InputCmp = () => {
    const [data, setData] = useState("");

  return (
    <div className='App'>
        <h6>Testing Input Box</h6>
        <input name='username' type='text' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Please enter your name' id='userId' />
    </div>
  )
}

export default InputCmp
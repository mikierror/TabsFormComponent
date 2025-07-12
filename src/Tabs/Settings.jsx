import React from 'react'

function Settings({Changedata,fullData}) {
  return (
    <div className='flex flex-col items-center'>
         
      <label htmlFor="phoneNumber">Gender</label>
      <div className='flex items-center justify-center gap-3'>
        <input  onChange={Changedata} checked={fullData?.Gender=="male"} value="male"  type="radio" name="Gender" id="male"  /><label htmlFor="male">Male</label>
        <input  onChange={Changedata} checked={fullData?.Gender=="female"} value="female" type="radio" name="Gender" id="female"  /><label htmlFor="female">female</label>
      </div>
    </div>
  )
}

export default Settings

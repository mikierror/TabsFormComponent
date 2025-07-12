import React from 'react'

function Home({Changedata,fullData }) {
  console.log(fullData);
  
  return (
    <div className='flex gap-4 flex-col'>
        <label htmlFor="username">Username</label>
      <input onChange={Changedata} value={fullData.username} className='border p-2 rounded-2xl' type="text" name="username" id="username" placeholder='Enter Full Name...' />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input onChange={Changedata} value={fullData.number} className='border p-2 rounded-2xl' type="text" name="number" id="phoneNumber" placeholder='Enter Full Name...' />
    </div>
  )
}

export default Home

import React from 'react'

function Profile({Changedata,fullData}) {
    
    console.log(fullData);
    return (
        <div>
            <h5>Enter Your Subjects</h5>
            <div className='flex flex-col '>
                <span><input type="checkbox"  onChange={Changedata} checked={fullData.subjects.includes("English")}    value={"English"} name="subjects" id="English" /><label htmlFor="English">English</label></span>
                <span><input type="checkbox"  onChange={Changedata} checked={fullData.subjects.includes("Hindi")}    value={"Hindi"}  name="subjects" id="Hindi" /><label htmlFor="Hindi">Hindi</label></span>
                <span><input type="checkbox"  onChange={Changedata} checked={fullData.subjects.includes("French")}    value={"French"} name="subjects" id="French" /><label htmlFor="French">French</label></span>
            </div>

        </div>
    )
}

export default Profile

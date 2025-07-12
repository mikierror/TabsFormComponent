import React, { useState } from 'react';
import Home from './Home';
import Profile from "./Profile";
import Settings from "./Settings";
export default function TabsComponents() {
    const [activeIndex, setactiveIndex] = useState(0)
    const [fullData, setFullData] = useState({
        username: '',
        number: '',
        subjects: [],
        Gender: '',
    });
    const tabData = [
        { id: 1, label: 'Home', content: Home },
        { id: 2, label: 'Profile', content: Profile },
        { id: 3, label: 'Settings', content: Settings },
    ];


    function Changedata(e) {
        console.log('change triggered'); // 🧪 should fire every keystroke
        console.log(fullData);

        const { name, value, checked, type } = e.target;


        if (name == "subjects") {
            if (checked) {
                setFullData((prev) => ({ ...prev, subjects: [...prev.subjects, value] }))
            }
            else {
                setFullData((prev) => ({ ...prev, subjects: prev.subjects.filter((item) => item != value) }))
            }
        }
        else {
            setFullData((prev) => ({ ...prev, [name]: value }))
        }


    }

    function handleSubmit(e) {
        console.log("hello");
        
        e.preventDefault();
        localStorage.setItem("SabhData", JSON.stringify(fullData));
        setFullData(
            {
                username: '',
                number: '',
                subjects: [],
                Gender: '',
            }
        )
    }

    let ActiveTab = tabData[activeIndex].content;




    return (
        <div className='min-h-screen bg-black text-white flex flex-col items-center p-6'>
            <div className='flex gap-4 mb-4'>
                {tabData.map((tab, index) => (
                    <button
                        key={tab.id}
                        className='bg-white text-black px-4 py-2 rounded'
                        onClick={() => setactiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className='bg-white text-black p-4 rounded w-full max-w-md'>
                <ActiveTab Changedata={Changedata} fullData={fullData} />
            </div>
            <div className='flex items-center justify-center gap-7'>
                <button onClick={() => setactiveIndex((prev) => prev - 1)} className={`border px-5 ${activeIndex <= 0 ? "visibility: hidden" : "bg-pink-400"}`}>Prev</button>
                <button onClick={() => setactiveIndex((prev) => (prev = prev + 1))} className={`border px-5 ${activeIndex == tabData.length - 1 ? "visibility: hidden" : "bg-pink-400"}`} >Next</button>
                {
                    activeIndex == tabData.length - 1 ? <button onClick={handleSubmit} className='bg-green-400 px-5'>Submit</button> : null
                }
            </div>

        </div>
    );
}

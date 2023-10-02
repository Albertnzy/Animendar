import { useState } from "react"

const Newsletter=()=>{

    const [email,setEmail]=useState('')
    const btnClickHandler=()=>{
        if(email===''){
            alert('Please Provide email.')
        }else{
            alert('Subscribed!!! I will reach back to you after few moments.')
        }
    }

    const handleChange=(event)=>{
        const val=event.target.value
        setEmail(val)
    }

    return(
        <div className="md:ml-[35%] ml-[20%] mt-20 mb-10">
            <h2 className="text-4xl font-bold">Subscribe to our newsletter</h2>
            <p className="mt-3">We will get back to you.</p>
            <form className="mt-3 md:ml-6" onSubmit={btnClickHandler}>
                <input
                className="md:w-[300px] h-[40px] rounded-md"
                type='email'
                value={email}
                onChange={handleChange}
                placeholder="Email"
                />
                <button type="submit" className="ml-2 border h-[43px] w-[100px] rounded-md bg-green-950 text-white hover:bg-white hover:text-black">Subscribe</button>
            </form>
        </div>

    )
}

export default Newsletter
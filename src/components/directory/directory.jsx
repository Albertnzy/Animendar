import anime from '../../assets/anime.jpg'
import aboutus from '../../assets/About_logo.jpg'
import bg_small from '../../assets/bg_small.jpg'
import Newsletter from '../Newsletter/Newsletter'
import {useNavigate} from 'react-router-dom'

const Directory=()=>{

    const navigate=useNavigate()

    return(
        <>
        <div className=' hidden h-auto w-full md:flex flex-col ' style={{ backgroundImage: `url(${anime})`}}>
            <div>
                <h1 className='md:text-6xl font-bold text-center my-auto text-white'>Anime's based on <br/>your<br/> preference.</h1>
                <h2 className='md:mt-[80px] text-center text-white md:text-2xl'>We take inputs of your interest and provide you with <br/> the best top exciting anime's that matches your requirements.</h2>
                <div className='w-full h-full flex'>
                <button onClick={()=>navigate("/content")} className='h-[35px] w-[120px] mx-auto bg-white rounded-md mt-5 hover:bg-slate-500 hover:text-white mb-6'>Get Started</button>
                </div>
            </div>
        </div>
         <div className='md:hidden h-auto mt-3 w-full flex flex-col ' style={{ backgroundImage: `url(${bg_small})`}}>
            <div>
                <h1 className='text-3xl font-bold text-center my-auto text-white'>Anime's based on <br/>your<br/> preference.</h1>
                <h2 className='mt-[30px] text-center text-white md:text-2xl'>We take inputs of your interest and provide you with <br/> the best top exciting anime's that matches your requirements.</h2>
                <div className='w-full h-full flex'>
                <button onClick={()=>navigate("/content")} className='h-[35px] w-[120px] mx-auto bg-white rounded-md mt-5 hover:bg-slate-500 hover:text-white mb-6'>Get Started</button>
                </div>
            </div>
        </div>
        
        <div id='about-section' className='hidden md:flex mt-8 md:mx-[180px] mx-4 mb-7'>
                <img className='md:w-[420px]  w-[350px]  rounded-xl ' src={aboutus} alt=""/>
            <div  className='flex flex-col text-xl ml-[50px]'>
                <h1 className='text-5xl font-bold md:mt-[80px]'>About Animendar.</h1>
               <p className=' mt-5 text-xl' >Animendar is a site that is widely known because of <br/> its composition of large variety of data related to <br/> anime that matches with your needs.</p>
            </div>
        </div>
        <div id='about-section' className='md:hidden flex mt-8 md:mx-[180px] mx-4 mb-7'>
                <img className='w-[200px] h-[180px] rounded-xl mt-10' src={aboutus} alt=""/>
            <div  className='flex flex-col ml-[30px]'>
                <h1 className='text-3xl font-bold mt-8'>About Animendar.</h1>
               <p className=' mt-2 text-sm' >Animendar is a site that is widely known because of <br/> its composition of large variety of data related to <br/> anime that matches with your needs.</p>
            </div>
        </div>
        <Newsletter/>
        </>
    )
}

export default Directory
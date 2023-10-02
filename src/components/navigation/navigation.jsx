import {Outlet} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
const Navigation=()=>{
    return(
        <div>
        <div className="flex justify-between bg-slate-50">
            <div>
                <h1 className="text-3xl font-bold mt-4 md:ml-9 ml-2">Animendar</h1>
            </div>
            <div className=' md:flex hidden text-3sm font-semibold justify-evenly space-x-9 mr-9 my-7'>
                <HashLink smooth to={'#about-section'}>About</HashLink>
                <h2>Blog</h2>
                <h2>Contact</h2>
            </div>
        </div>
        <Outlet/>
        </div>
    )
}

export default  Navigation
import AnimeData from '../../data/data.json'

const ContentPage=()=>{
    return(
        <div className='m-8'>
         <p className='text-2xl font-semibold md:ml-[250px]'>List of Anime's that you might like:</p>
        <div className="m-10 flex flex-col space-y-[200px] items-center">
        {AnimeData.map((item)=>{
            return <div className="h-[150px] w-[350px] mb-4">
            <img src={item.url} alt=""/>
            <h2 className="text-xl text- font-bold text-center mt-3">{item.name}</h2>
            </div>
        })}  
        </div>
        </div>
    )
}

export default ContentPage



const MovieCard=(props)=>{
const {data}=props

    return(
        <>
        <div>
            
            <img src={data.Poster} alt={data.Title}/>
        </div>
        <div>
           <h1>{data.Title}</h1>
           <p>{data.Year}</p>

        </div>
        
        </>
    );
}


export default MovieCard
import movieApi from "../../api/movieApi"
import { APIKey } from "../../api/movieApiKey"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAsyncMovies=createAsyncThunk(
    "movies/fetchAsyncMovies",
    async ()=>{
        const movieText="Shrek"
        const response=await movieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
            return response.data
}
);


export const fetchAsyncShows=createAsyncThunk(
    "movies/fetchAsyncShows",
    async ()=>{
        const seriesText="how"
       const response= await movieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
           
            return response.data
}
);


const initialState={
    movies:{},
    shows:{}
}

const movieSlice=createSlice({

    name:"movies",
    initialState,
    reducers:{
        
    },
   extraReducers:{

    [fetchAsyncMovies.pending]:()=>{
        console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
        console.log("Fetched succesfully");
        return {...state,movies:payload}
    },
    [fetchAsyncMovies.rejected]:()=>{
        console.log("Not Found");
    },
    [fetchAsyncShows.fulfilled]:(state,{payload})=>{
        
        return {...state,shows:payload}
    }
   }

})

export const getAllMovies=(state)=>state.movies.movies
export const getAllShows=(state)=>state.movies.shows

export default movieSlice.reducer
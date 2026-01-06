import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../Utils/appSlice"
import { useEffect, useState } from "react"
import { Youtube_Search_Api } from "../Utils/Constant"
import { cacheResults } from "../Utils/searchSclice"

const Head =()=>{
// for search and input things
const [searchQuerry,setSearchQuerry]=useState('')

// make a suggestion state variable for displaying
const [suggestion,setSuggestions] =useState([])

// state varriable for showSuggestions 

const [showSuggestions,setShowSuggestions]=useState(false)

// here i will subscribe/ read the cache here

const searchCache= useSelector((store)=>store.search)
// this will go to the store and select the search Key in that object

// now this question is how will it find the api from cache
// its store in a object format
/**
 *   searchCahce= {
 * "iphone": ["iphone11","iphone14"]
 * 
 * }
 * 
 * searchQuery = i[hone]
 * 
 * 
 */

// dispatch is coming from useDispatch

const dispatch = useDispatch()






// i have used Debouncing here


useEffect(()=>{
// api call


// make an api call after every key press
// But if the differnce between 2 Api calls is <200ms
// decline the api call
// to do that we will write a setTimeout

const timer = setTimeout(()=>{
   // applying cache logic here 
    
// if api is already present insdie the cache then set suggestion else will call the api
// if searchCache
   if(searchCache[searchQuerry]){
    setSuggestions(searchCache[searchQuerry])
   }
   else{
    getSerchSuggestion()
   }


    },200)

// after the timer we have to clear the timer
return () => {
    clearTimeout(timer)
}

},[searchQuerry])

/**
 * 
 * after every key - i
 * - render the component
 * -useEffect()
 * -it will start a timer => make a api call after 200ms
 * 
 * 
 * if pressed one more key-ip
 * 
 * (if we presed p key before the 200ms it will destroy the component
 *  and it will call the useEffect() return method)
 * 
 * 
 * 
 * -it will again re-render the component
 * -it will useEFfect() because of dependencies
 * - start timer => make api call after 200ms
 * 
 * 
 * 
 *  new timer started settimeout(200ms)- make an api call
 * 
 * 
 */







const getSerchSuggestion = async ()=>{
    console.log('API CALL - '+searchQuerry)
    // the search querry coing from that useState()
    // use cors policy extension for web browser
    const data =await fetch(Youtube_Search_Api+searchQuerry)
    const json = await  data.json()
    //console.log(json[1])


    // here i set the suggestins in set varabile
    setSuggestions(json[1])


    // updateCache

    dispatch(cacheResults({
        [searchQuerry]:json[1]
    }))
}



// dispatching an Action and its useDispatch is a hook come from react-redux
    // const dispatch = useDispatch()
   
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
<div className="  relative  grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex col-span-1">
            
            <img 
            onClick={()=>{toggleMenuHandler()}}
            className=" h-8 cursor-pointer"
             src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="Hamburger" />
            
            
            <a href="">
            <img className="h-8 mx-2"
             src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png?20170829160812" alt="youtubeLogo" />
             </a>
        </div>
        <div className=" col-span-10 px-10">

            <div>

           
            
            <input className=" w-1/2  px-5
            border-1 border-gray-400 p-2 rounded-l-full" 
             type="text" 
             value={searchQuerry} 
             onChange={(e)=>setSearchQuerry(e.target.value)}
             // for showing suggestions and hiding
             onFocus={()=>setShowSuggestions(true)}
             onBlur={()=>setShowSuggestions(false)}
             />
           
           
            <button className=" border border-gray-400 px-5 py-2 rounded-r-full  bg-gray-100"
            >🔍</button>

             </div>

    { /*if the showSuggestions is true only then it will show */   }

           { showSuggestions && (<div className="absolute bg-white py-2 px-2 w-128 shadow-lg rounded-lg border border-gray-100">
                <ul>

                    {suggestion.map(s=><li key={s} className=" py-2 px-3 shadow-lg hover:bg-gray-100">🔍{s}</li>)}
                    
                    
                    
                </ul>
                
             </div>)}
        </div>
        <div className="col-span-1">
            <img  className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/709/709699.png" alt="usericon" />
        </div>
</div>
    )
}
export default Head
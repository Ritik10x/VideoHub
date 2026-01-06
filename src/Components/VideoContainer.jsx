import { useEffect, useState } from "react"
import { Youtube_Video_Api } from "../Utils/Constant"
import VideoCard from "./VideoCards"
import { Link } from "react-router-dom"
const VideoContainer=()=>{
const [videos,setVideos]=useState([])
    useEffect(()=>{

        getVideos()

    },[])

    const getVideos=async()=>{
        
              const data =await fetch(Youtube_Video_Api);
        const json = await data.json()
    //    console.log(json)
        setVideos(json.items)
        
       
    }

    return(
        
        <div className="flex flex-wrap ">
           {videos.map((video)=>(
      <Link key={video.id?.videoId || video.id} to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video}/></Link>
      ))}
             
        </div>
    )
}
export default VideoContainer
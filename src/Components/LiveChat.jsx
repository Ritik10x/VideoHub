import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessasge,getRandomEmoji } from "../Utils/helper";





const LiveChat =()=>{

    const[liveMessage,setLiveMessage]=useState("")




    // dispatch the action
    const dispatch = useDispatch()

    const chatMessages = useSelector(store=>store.chat.messages)





    // using polling here 

    useEffect(()=>{

       const i= setInterval(()=>{
        // Api polling
        // console.log("api polling")


        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessasge(20)+getRandomEmoji()
        }))

        },2000)
        return ()=> clearInterval(i)
                //cleanUP of setInterVal (garbage collection)  dont forget to clean the timeout
    },[])



    return(
        <>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
         
         <div>

         
         
          {/* dont use indexs as keys */}
          
           {chatMessages.map((c,i)=> <ChatMessage key={i}  name={c.name} message={c.message}
            />)
            }

            </div>
            </div>
                {/*the form here will let us hit enter and send but this is refrshing our page too */}
            <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>{
                e.preventDefault();
                console.log("ON Form Submit",liveMessage)
                dispatch(addMessage({
                    name:'ritik',
                    message:liveMessage,
                }))
                setLiveMessage('')
            }}>
                <input  className="w-95 px-2" type="text" value={liveMessage} onChange={(e)=>{
                    setLiveMessage(e.target.value)
                }} />
                 <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
            </>
    )
}
export default LiveChat;
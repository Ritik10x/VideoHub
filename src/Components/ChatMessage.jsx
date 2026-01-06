
const ChatMessage=({name,message})=>{

    return(
        <div className="flex items-center shadow p-2">
            <img className=" rounded-xl"
            src="https://yt4.ggpht.com/ytc/AIdro_kDRQPhJSlRLHo_-DXQg2a4b4X-P-Qgl6np58QME0EV8lw=s32-c-k-c0x00ffffff-no-rj" alt="image" />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
        </div>
        
    )
}
export default ChatMessage
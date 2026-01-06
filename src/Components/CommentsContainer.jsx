import React from "react";

const commentsData = [
    {
        name: "Akshay",
        text: "lorem epsum dolor sit amet, consecteur",
        replies:[]
    },
    {
        name: "Akshay",
        text: "lorem epsum dolor sit amet, consecteur",
        replies:[{
                    name: "ritik",
                    text: "lorem epsum dolor sit amet, consecteur",
                    replies:[{
                        name: "john",
                        text: "lorem epsum dolor sit amet, consecteur",
                        replies:[]
                    }]

        }]
    },
    {
        name: "Akshay",
        text: "lorem epsum dolor sit amet, consecteur",
        replies:[]
    },
    {
        name: "Akshay",
        text: "lorem epsum dolor sit amet, consecteur",
        replies:[{
                name: "Akshay",
                text: "lorem epsum dolor sit amet, consecteur",
                replies:[{
                    name: "ritik",
                    text: "lorem epsum dolor sit amet, consecteur",
                    replies:[{
                        name: "john",
                        text: "lorem epsum dolor sit amet, consecteur",
                        replies:[]
                    }]
                }]
        }]
    },
    {
        name: "Akshay",
        text: "lorem epsum dolor sit amet, consecteur",
        replies:[]
    },
    


]
// the {data} is comming from comments data
const Comment = ({data})=>{
    const {name,text,replies}=data

return( 
<div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
    <img  className="w-12 h-12"
    src="https://cdn-icons-png.flaticon.com/512/709/709699.png" alt="user image" />
    <div className=" px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
</div>

)
}

// we are going to pass whole comments data into it

    const CommentsList = ({comments})=>{
        // dont use indexes  as key
return comments.map((comment,index)=> (
    <div key={index}>
<Comment  data={comment}/>

    <div className="pl-5 border-l border-black ml-5">
        {/* here we are recursing the comments itself 
        and we will pass replies here from comment data
        */}
        <CommentsList comments={comment.replies}/>
    </div>

</div>
))
 }

const CommentsContainer = ()=>{

    return(
        <div className="m-5 p-2">
          <h1 className="text-2xl font-bold">Comments:</h1>
          {/* we have passed the comments data */}  
          <CommentsList comments={commentsData}/>
            </div>
    )
}
export default CommentsContainer
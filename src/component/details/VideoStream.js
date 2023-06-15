
import ReactPlayer from "react-player";


const VideoStream =(props)=>
{
const  renderVideo=({movieData})=>

  
   {
   
    
  
if(movieData)
{
return movieData.map((item)=>
{


        return(
            
             <div id="video">
        <ReactPlayer url=""/>

        <div>{renderVideo(props)}/</div>
        </div>


        )
    
        }

    )


}
}

   

        
}
export default VideoStream;
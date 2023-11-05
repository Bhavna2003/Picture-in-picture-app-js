const video = document.getElementById("video");
const btn = document.getElementById("startBtn");

async function selectMedia(){
    try{
        let mediaStrem = await navigator.mediaDevices.getDisplayMedia(); 
        video.srcObject = mediaStrem;
        video.onloadedmetadata = () =>{
            video.play();
        }   
    } catch (error){
        console.log("error", error);
    }
} 

btn.addEventListener("click", async()=>{
    await video.requestPictureInPicture();
})
selectMedia();

const cam = document.querySelector("#video")

 async function startVideo() {
    const constraints = {video:true}

    try {
      let stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      cam.srcObject = stream;

      cam.onloadedmetadata = () => {
        cam.play()
      }

    } catch (error){
      console.error(error);
    }

}

startVideo()
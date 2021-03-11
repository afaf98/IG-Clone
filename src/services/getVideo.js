export default function getVideo(videoRef) {
  navigator.mediaDevices
    .getUserMedia({ video: { width: 300 } })
    .then((stream) => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error("error:", err);
    });
}

export const paintToCanvas = (videoRef, photoRef) => {
  let video = videoRef.current;
  let photo = photoRef.current;
  console.log("Video", video);
  let ctx = photo.getContext("2d");

  const width = 320;
  const height = 240;
  photo.width = width;
  photo.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 200);
};

export const takePhoto = (photoRef, stripRef) => {
  let photo = photoRef.current;
  let strip = stripRef.current;
  const data = photo.toDataURL("image/jpg");
  // console.log("What do i got here", data);
  return data;
  // const link = document.createElement("a");
  // link.href = data;
  // link.setAttribute("download", "myWebcam");
  // link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
  // strip.insertBefore(link, strip.firstChild);
};

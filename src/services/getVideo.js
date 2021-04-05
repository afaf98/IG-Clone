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
  let ctx = photo.getContext("2d");

  const width = 320;
  const height = 240;
  photo.width = width;
  photo.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 200);
};

export const takePhoto = async (photoRef) => {
  let photo = photoRef.current;
  const data = photo.toDataURL("image/jpg");
  const res = await fetch(data);
  const blob = await res.blob();
  const newFile = new File([blob], `${new Date()}`, { type: "image/png" });
  return newFile;
};

export const stop = (videoRef) => {
  const stream = videoRef.current.srcObject;
  const tracks = stream.getTracks();

  for (let i = 0; i < tracks.length; i++) {
    let track = tracks[i];
    track.stop();
  }

  videoRef.current.srcObject = null;
};

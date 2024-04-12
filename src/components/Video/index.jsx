export default function Video({ file }) {
  return (
    <video
      id={`Video${file}`}
      className="video-js"
      controls
      preload="auto"
      poster={`/video/${file}.jpg`}
      data-setup='{"fluid": true}'
    >
      <source src={`/video/${file}.mp4`} type="video/mp4" />
      <source src={`/video/${file}.webm`} type="video/webm" />
      <p className="vjs-no-js">
        To view this video please enable JavaScript, or consider upgrading to a
        web browser that supports HTML5 video
      </p>
    </video>
  )
}

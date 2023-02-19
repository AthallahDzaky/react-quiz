import { useRef, useState } from "react";
import { cssVideo } from "./style";

const Player = () => {
  const refVideoPlay = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayVideo = () => {
    if (!isPlaying) {
      refVideoPlay.current.play()
      setIsPlaying(!isPlaying)
    }
    if (isPlaying) {
      refVideoPlay.current.pause()
      setIsPlaying(!isPlaying)
    }
  }
  const [isMuted, setIsMuted] = useState(false)
  const handleMuteVideo = () => {
    setIsMuted(!isMuted)
  }
  const [seekValue, setSeekValue] = useState(0)
  const handleOnSeeking = (event) => {
    setSeekValue(event.target.value)
    refVideoPlay.current.currentTime = event.target.value
  }
  const [videoDuration, setVideoDuration] = useState(0)
  const handleOnTimeUpdate = () => {
    let videoData = refVideoPlay.current
    if (videoData) {
      setSeekValue(videoData.currentTime)
      setVideoDuration(videoData.duration)
    }
  }

  return(
    <div>
      <video
        type="video/mp4"
        ref={refVideoPlay}
        muted={isMuted}
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onTimeUpdate={handleOnTimeUpdate}
      />
      <button type="button" onClick={handlePlayVideo}>
        {isPlaying ? (
          <div>Pause</div>
        ) : (
          <div>Play</div>
        )}
      </button>
      <button type="button" onClick={handleMuteVideo}>
        {isMuted ? (
          <div>Unmute</div>
        ) : (
          <div>Mute</div>
        )}
      </button>
      <input type="range" onChange={handleOnSeeking} min="0" max={videoDuration} value={seekValue} step="0.05"/>
      <span>
        {Math.floor(seekValue / 60)}:{Math.floor(seekValue % 60)}/
        {Math.floor(videoDuration / 60)}:{Math.floor(videoDuration % 60)}
        </span>
    </div>
  )
}

export default Player;

import { useRef, useState, useEffect } from "react";
import skipPrevious from '../assets/skip_previous.svg';
import playArrow from '../assets/play_arrow.svg';
import skipNext from '../assets/skip_next.svg';
import muteSvg from '../assets/Frame 253.svg'
import Like from '../assets/heart.svg'
import Forward from '../assets/forward.svg'
import Plus from '../assets/Component 170.svg'
import ArrowDown from '../assets/ArrowDown.svg'
import YouTube from "react-youtube";
import "./VideoPage.css";

export default function YouTubeCustomPlayer() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      fs: 0,
    },
  };

  const onReady = (e) => {
    playerRef.current = e.target;
    setDuration(e.target.getDuration());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const time = playerRef.current.getCurrentTime();
        const dur = playerRef.current.getDuration();
        setCurrentTime(time);
        setDuration(dur);
        setProgress((time / dur) * 100);
      }
    }, 500); // обновляется каждые полсекунды

    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!showVideo) setShowVideo(true);
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (muted) {
      player.unMute();
    } else {
      player.mute();
    }
    setMuted(!muted);
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    const newTime = (value / 100) * duration;
    playerRef.current.seekTo(newTime, true);
    setCurrentTime(newTime);
    setProgress(value);
  };

  const rewind = () => {
    const time = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(Math.max(time - 10, 0));
  };

  const forward = () => {
    const time = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(Math.min(time + 10, duration));
  };

  const toggleFullscreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe.requestFullscreen) iframe.requestFullscreen();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
        <div className="yt-page">
            {/* Левая колонка */}
            <div className="yt-left">
                <div className="yt-wrapper">
                    {/* Плеер */}
                    <div className="video-section">
                        {showVideo ? (
                            <YouTube videoId="icaSda6Rrrg" opts={opts} onReady={onReady} />
                        ) : (
                            <div className="preview" onClick={togglePlay}>
                                <img
                                    src="./public/posterVideo.jpg"
                                    alt="Preview"
                                    className="preview-image"
                                />
                                <div className="overlay-text">
                                    <h1>ENLEØ</h1>
                                    <p>ВЕДИ МЕНЕ В ХРАМ</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="controls">
                        <button onClick={rewind}><img src={skipPrevious} alt="rewind" width="34" height="34" /></button>
                        <button onClick={togglePlay}><img src={playArrow} alt="play" width="34" height="34" /></button>
                        <button onClick={forward}><img src={skipNext} alt="forward" width="34" height="34" /></button>
                        <button onClick={toggleMute}><img src={muteSvg} alt="mute" width="34" height="34" /></button>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            className="timeline"
                        />

                        <span className="time-display">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>

                        <button onClick={toggleFullscreen} title="Fullscreen">⛶</button>
                        <button title="Налаштування">⚙</button>
                        <button title="Субтитри">🄲</button>
                    </div>
                </div>

                {/* Заголовок */}
                <h2>ENLEO - ВЕДИ МЕНЕ В ХРАМ (TAKE ME TO CHURCH УКРАЇНСЬКОЮ)</h2>

                {/* Панель действий */}
                <div className="video-actions-bar">
                    <div className="channel-info">
                        <img src="./public/EnleoAv.png" alt="ENLEO Avatar" className="channel-avatar" />
                        <div className="channel-text">
                            <p className="channel-name">ENLEO</p>
                            <p className="channel-subs">34,9k subscribes</p>
                        </div>
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <div className="actions">
                        <button className="action-btn">
                            <img src={Like} alt="like" width="34" height="34" /><span>15 884</span>
                        </button>
                        <button className="action-btn">
                            <img src={Forward} alt="forward" width="34" height="34" /> Forward
                        </button>
                        <button className="action-btn">
                            <img src={Plus} alt="add to playlist" width="34" height="34" /> Add to playlist
                        </button>
                        <button className="action-btn">
                            More <img src={ArrowDown} alt="more" width="34" height="34" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Правая колонка - рекомендации */}
            <div className="VideoFromThisChannel">
                <div className="RecomendVideo">
                    <img src="./public/Enleo1.png" alt="чорнеморе" />
                    <div>
                        <p>чорнеморе</p>
                        <p>ENLEO</p>
                    </div>
                </div>
                <div className="RecomendVideo">
                    <img src="./public/Enleo2.png" alt="ENLEO & МАША КОНДРАТЕНКО - ЛЮБОВ СИЛЬНІША" />
                    <div>
                        <p>ENLEO & МАША КОНДРАТЕНКО - ЛЮБОВ СИЛЬНІША (MOOD VIDEO)</p>
                        <p>ENLEO</p>
                    </div>
                </div>
                <div className="RecomendVideo">
                    <img src="./public/Enleo3.png" alt="ІНША ЛЮБОВ" />
                    <div>
                        <p>ІНША ЛЮБОВ (ANOTHER LOVE УКРАЇНСЬКОЮ)</p>
                        <p>ENLEO</p>
                    </div>
                </div>
                <div className="RecomendVideo">
                    <img src="./public/Enleo4.png" alt="Sweater Weather" />
                    <div>
                        <p>The Neighbourhood - Sweater Weather (Українською)</p>
                        <p>ENLEO</p>
                    </div>
                </div>
                <div className="RecomendVideo">
                    <img src="./public/Enleo5.png" alt="Animal ДжаZ" />
                    <div>
                        <p>Animal ДжаZ - Три Полоски (cover)</p>
                        <p>ENLEO</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="AboutAvtor">
                <div className="firstInfo">
                     <p>3,9kk views 4 months ago</p> 
                        <p>"Веди мене в храм" є україномовним перекладом відомої пісні Hozier «Take Me To Church»
                        від музиканта та співака з українського Маріуполя ENLEO Нікіти Леонтьєва.<span>Show more<button className="action-btn1"><img src={ArrowDown} alt="more" width="24" height="14"/></button></span></p>
                </div>
            </div>

        <div className="yt-rec-container">
            <h2 className="yt-title">Recommended</h2>
                <div className="yt-cards">
                    <div className="yt-card">
                    <img src="./public/rec1.png" alt="Thumbnail 1" className="yt-thumbnail" />
                    <div className="yt-info">
                        <div className="yt-channel-info">
                        <img src="./public/av1.png" alt="Avatar 1" className="yt-avatar" />
                        <div>
                            <p className="yt-video-title">'Before Your Very Eyes...Atoms for Peace - MAMA JAMMA (Live cover)'</p>
                            <p className="yt-channel">St3inway</p>
                        </div>
                        </div>
                        <p className="yt-meta">6M views • 1 day ago</p>
                    </div>
                    </div>

                    <div className="yt-card">
                    <img src="./public/rec2.png" alt="Thumbnail 2" className="yt-thumbnail" />
                    <div className="yt-info">
                        <div className="yt-channel-info">
                        <img src="./public/av2.png" alt="Avatar 2" className="yt-avatar" />
                        <div>
                            <p className="yt-video-title">Joji - SMITHEREENS Full Album (Pacific Coast Highway)</p>
                            <p className="yt-channel">Joji Edits</p>
                        </div>
                        </div>
                        <p className="yt-meta">645M views • 6 months ago</p>
                    </div>
                    </div>

                    <div className="yt-card">
                    <img src="./public/rec3.png" alt="Thumbnail 3" className="yt-thumbnail" />
                    <div className="yt-info">
                        <div className="yt-channel-info">
                        <img src="./public/av3.png" alt="Avatar 3" className="yt-avatar" />
                        <div>
                            <p className="yt-video-title">Loreen - Tattoo (Acoustic)</p>
                            <p className="yt-channel">Loreen</p>
                        </div>
                        </div>
                        <p className="yt-meta">2.2M views • 4 weeks ago</p>
                    </div>
                    </div>

                    <div className="yt-card">
                    <img src="./public/rec4.png" alt="Thumbnail 4" className="yt-thumbnail" />
                    <div className="yt-info">
                        <div className="yt-channel-info">
                        <img src="./public/av4.jpg" alt="Avatar 4" className="yt-avatar" />
                        <div>
                            <p className="yt-video-title">電磁祭囃子 in NEO TOKYO 🔴</p>
                            <p className="yt-channel">ELECTRONICOS FANTASTICOS!</p>
                        </div>
                        </div>
                        <p className="yt-meta">12M views • 2 years ago</p>
                    </div>
                    </div>
                </div>
        </div>
  
    </div>


  );
}

import ReactPlayer from 'react-player';

import './videoPlayer.scss';

import playerBg from '../../image/player-bg.jpg';
import playerBtn from '../../image/play-btn.png';

const VideoPlayer = () => {
     return (
        <div className="video">
            <h2 className="video-title">Посмотрите видео-презентацию</h2>
            <div className="video__container">
            <ReactPlayer 
                    url="https://youtu.be/uCNWuSbPnt4" 
                    controls 
                    light={playerBg} 
                    playIcon={<img className='video__container-button' src={playerBtn} alt="Play button"/>}
                    className="react-player"
                />
            </div>
        </div>
     )
}

export default VideoPlayer;
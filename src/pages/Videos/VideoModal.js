import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoModal = React.forwardRef((props, ref) => {

    const [play, setPlay] = useState(false);
    return (
            <div
                ref={ref}
                style={{
                    position: "fixed",

                    paddingBottom: "50%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
                className="video-modal-container"
            >

                <ReactPlayer
                    onReady={() => setPlay(true)}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "80%"
                    }}
                    height="80%"
                    width="100%"
                    url={`https://www.youtube.com/watch?v=${props.youtubeId}`}
                    controls={true}
                    // light={thumbnail}
                    playIcon={null}
                    playing={play}
                />
            </div>
    );
});

export default VideoModal;
import "./styles.css";

import VideoControls from "@components/video-controls";
import VideoBoxHeader from "@components/videobox-header";

import useAgoraStore from "@/store/agora.store";
import { AgoraVideoPlayer } from "agora-rtc-react";
import { useMicrophoneAndCameraTracks } from "@/services/agora.service";

const VideoBox = () => {
  const channelName = useAgoraStore((state) => state.agoraChannel);
  const inCall = useAgoraStore((state) => state.inCall);
  const users = useAgoraStore((state) => state.users);
  const trackState = useAgoraStore((state) => state.trackState);

  const { tracks } = useMicrophoneAndCameraTracks();

  return (
    <div className="videobox-container">
      <div className="videobox">
        <VideoBoxHeader title="Pair Programming with fellows" />
        <div className="videobox-content">
          <div className="videobox-content-video">
            <VideoControls />

            {inCall && (
              <div className="videos-all">
                {trackState.video && (
                  <div className="remote-video-container" id="local-player">
                    <AgoraVideoPlayer
                      style={{ height: "100%", width: "100%" }}
                      className="vid"
                      videoTrack={tracks[1]}
                    />
                  </div>
                )}

                {users.map((user) => {
                  console.log("wave-user", user);
                  return (
                    <div
                      key={user.uid}
                      className="remote-video-container"
                      id={`player-${user.uid}`}
                    >
                      <div className="remote-video-name">{user.uid}</div>
                      <AgoraVideoPlayer
                        style={{ height: "100%", width: "100%" }}
                        className="vid"
                        videoTrack={user.videoTrack}
                        key={user.uid}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoBox;

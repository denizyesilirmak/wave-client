import { useEffect, useState } from "react";
import "./styles.css";
import { Button, ButtonGroup } from "@/components/buttons";

const Settings = () => {
  const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([]);
  const [microphoneDevices, setMicrophoneDevices] = useState<MediaDeviceInfo[]>(
    []
  );

  const getCameraDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    setCameraDevices(cameras);
  };

  const getMicrophoneDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const microphones = devices.filter(
      (device) => device.kind === "audioinput"
    );
    setMicrophoneDevices(microphones);
  };

  useEffect(() => {
    getCameraDevices();
    getMicrophoneDevices();
  }, []);

  return (
    <div className="settings-container">
      <div className="settings-panel">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-group">
          <h5 className="settings-group-title">Device Settings</h5>
          <ButtonGroup>
            {cameraDevices.map((device) => {
              return <Button key={device.deviceId} label={device.label} />;
            })}
          </ButtonGroup>

          <h5 className="settings-group-title">Audio Settings</h5>
          <ButtonGroup>
            {microphoneDevices.map((device) => {
              return <Button key={device.deviceId} label={device.label} />;
            })}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Settings;

import { Button, ButtonGroup } from "@/components/buttons";
import { LANGUAGES, getLanguage } from "@/i18n";
import { THEMES, useTheme } from "@/store/theme.store";
import { useCallback, useEffect, useState } from "react";
import { changeLanguage } from "../../i18n";
import "./styles.css";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([]);
  const [microphoneDevices, setMicrophoneDevices] = useState<MediaDeviceInfo[]>(
    []
  );

  const { t } = useTranslation();

  const [currentTheme, setCurrentTheme] = useTheme();

  const getCameraDevices = useCallback(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter((device) => device.kind === "videoinput");
    setCameraDevices(cameras);
  }, []);

  const getMicrophoneDevices = useCallback(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const microphones = devices.filter(
      (device) => device.kind === "audioinput"
    );
    setMicrophoneDevices(microphones);
  }, []);

  useEffect(() => {
    getCameraDevices();
    getMicrophoneDevices();
  }, [getCameraDevices, getMicrophoneDevices]);

  return (
    <div className="settings-container">
      <div className="settings-panel">
        <h2 className="settings-title">{t("device-settings")}</h2>
        <div className="settings-group">
          <h5 className="settings-group-title">
            {t("camera-settings")}
          </h5>
          <ButtonGroup>
            {cameraDevices.map((device) => {
              return <Button key={device.deviceId} label={device.label} />;
            })}
          </ButtonGroup>

          <h5 className="settings-group-title">
            {t("audio-settings")}
          </h5>
          <ButtonGroup>
            {microphoneDevices.map((device) => {
              return <Button key={device.deviceId} label={device.label} />;
            })}
          </ButtonGroup>
        </div>
      </div>

      <div className="settings-panel">
        <h2 className="settings-title">{t("application-settings")}</h2>
        <div className="settings-group">
          <h5 className="settings-group-title">{t("language")}</h5>
          <ButtonGroup>
            {Object.values(LANGUAGES).map((language) => {
              return (
                <Button
                  key={language.name}
                  label={language.name}
                  onClick={() => changeLanguage(language.code)}
                  isActive={language.code === getLanguage()}
                />
              );
            })}
          </ButtonGroup>

          <h5 className="settings-group-title">{t("theme")}</h5>
          <ButtonGroup>
            {Object.values(THEMES).map((theme) => {
              return (
                <Button
                  onClick={() => {
                    setCurrentTheme(theme.name);
                  }}
                  key={theme.name}
                  label={theme.name}
                  isActive={theme.name === currentTheme}
                />
              );
            })}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Settings;

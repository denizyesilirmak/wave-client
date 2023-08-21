import { ReactComponent as CameraIcon } from "@assets/icons/camera.svg";
import { ReactComponent as CreateIcon } from "@assets/icons/create.svg";
import { ReactComponent as SettingsIcon } from "@assets/icons/settings.svg";

export const SIDEBAR_MENU = [
  {
    title: "New Session",
    icon: CreateIcon,
    link: "/create-session",
  },
  {
    title: "Meeting",
    icon: CameraIcon,
    link: "/video-conference",
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
];

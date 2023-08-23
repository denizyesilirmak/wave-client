import { ReactComponent as CameraIcon } from "@assets/icons/camera.svg";
import { ReactComponent as CreateIcon } from "@assets/icons/create.svg";
import { ReactComponent as SettingsIcon } from "@assets/icons/settings.svg";

export const SIDEBAR_MENU = [
  {
    title: "new-session",
    icon: CreateIcon,
    link: "/create-session",
  },
  {
    title: "meeting",
    icon: CameraIcon,
    link: "/video-conference",
  },
  {
    title: "settings",
    icon: SettingsIcon,
    link: "/settings",
  },
];

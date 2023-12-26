import { IMicrophoneAudioTrack } from "agora-rtc-react";
import { create } from "zustand";

interface AgoraStore {
  agoraAppId: string;
  agoraChannel: string;
  agoraToken: string;
  inCall: boolean;
  users: any[];
  start: boolean;
  tracks: [
    IMicrophoneAudioTrack | undefined,
    IMicrophoneAudioTrack | undefined
  ];
  trackState: {
    audio: boolean;
    video: boolean;
  };

  setInCall: (inCall: boolean) => void;
  setAgoraAppId: (agoraAppId: string) => void;
  setAgoraChannel: (agoraChannel: string) => void;
  setAgoraToken: (agoraToken: string) => void;
  setUsers: (users: any[]) => void;
  setStart: (start: boolean) => void;
  setTracks: (
    tracks: [
      IMicrophoneAudioTrack | undefined,
      IMicrophoneAudioTrack | undefined
    ]
  ) => void;
  setTrackState: (trackState: { audio: boolean; video: boolean }) => void;
}

const useAgoraStore = create<AgoraStore>((set) => ({
  agoraAppId: "f95ad173c36749fe84d9e49a4777a48a",
  agoraChannel: "test",
  agoraToken:
    "007eJxTYOAUPbY26kh1hJ7OcdYWPpPjb82d8p8Fldq6amavcmiZ8l2BIc3SNDHF0Nw42djM3MQyLdXCJMUy1cQy0cTc3DzRxCJxYm9GakMgI4PAZm1GRgYIBPFZGEpSi0sYGACYLxz/",
  inCall: false,
  users: [],
  start: false,
  tracks: [undefined, undefined],
  trackState: {
    audio: true,
    video: true,
  },
  setInCall: (inCall) => set(() => ({ inCall })),
  setAgoraAppId: (agoraAppId) => set(() => ({ agoraAppId })),
  setAgoraChannel: (agoraChannel) => set(() => ({ agoraChannel })),
  setAgoraToken: (agoraToken) => set(() => ({ agoraToken })),
  setUsers: (users) => set(() => ({ users })),
  setStart: (start) => set(() => ({ start })),
  setTracks: (tracks) => set(() => ({ tracks })),
  setTrackState: (trackState) => set(() => ({ trackState })),
}));

export const setAgoraAppId = (agoraAppId: string) => {
  useAgoraStore.getState().setAgoraAppId(agoraAppId);
};

export const setAgoraChannel = (agoraChannel: string) => {
  useAgoraStore.getState().setAgoraChannel(agoraChannel);
};

export const setAgoraToken = (agoraToken: string) => {
  useAgoraStore.getState().setAgoraToken(agoraToken);
};

export const setInCall = (inCall: boolean) => {
  useAgoraStore.getState().setInCall(inCall);
};

export const setUsers = (users: any[]) => {
  useAgoraStore.getState().setUsers(users);
};

export const setStart = (start: boolean) => {
  useAgoraStore.getState().setStart(start);
};

export const setTracks = (
  tracks: [IMicrophoneAudioTrack | undefined, IMicrophoneAudioTrack | undefined]
) => {
  useAgoraStore.getState().setTracks(tracks);
};

export const setTrackState = (trackState: {
  audio: boolean;
  video: boolean;
}) => {
  useAgoraStore.getState().setTrackState(trackState);
};

export default useAgoraStore;

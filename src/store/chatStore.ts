import { create } from "zustand";

const messageArray = [
  {
    from: "Deniz Yeşilırmak",
    messageBody: "Selam, başlıyor muyuz?",
  },
];

type Message = {
  from: string;
  messageBody: string;
  id?: string;
};

export const useChatStore = create((set) => ({
  messages: messageArray,
  addMessage: (message: Message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  removeMessage: (message) =>
    set((state) => ({
      messages: state.messages.filter((m) => m.id !== message.id),
    })),
}));

export const addMessage = (message: Message) => {
  useChatStore.getState().addMessage(message);
};

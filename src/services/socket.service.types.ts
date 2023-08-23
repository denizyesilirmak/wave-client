export type SocketType = {
  connect: () => void;
  on: (event: string, callback: (data: unknown) => void) => void;
  emit: (event: string, data: unknown) => void;
  disconnect: () => void;
};

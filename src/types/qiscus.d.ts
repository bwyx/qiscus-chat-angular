// temporary solution since there is no typescript definition for qiscus,
// i could assert anywhere with 'any' type but i love typescript, so i typed it a few

declare module 'qiscus-sdk-core' {
  interface InitOptions {
    AppId: string;
    options?: {
      baseUrl?: string;
      [key: string]: any;
    };
  }

  export default class QiscusSDK {
    constructor();

    isLogin: boolean;

    init: (opts: InitOptions) => Promise<void>;
    setUser: (
      userId: string,
      userKey: string,
      username: string,
      avatarURL?: string,
      extras?: Record<string, string | number | boolean>
    ) => Promise<void>;
    setUserWithIdentityToken: (user: any) => Promise<void>;

    disconnect(): void;

    loadRoomList: (opts: { page: number; limit: number }) => Promise<any>;
    getRoomById: (roomId: string) => Promise<any>;

    sendComment: (
      roomId: number,
      message: string,
      messageId?: string | null,
      type?: 'text' | 'file_attachment',
      payload?: any
    ) => Promise<any>;

    [key: string]: any;
  }
}

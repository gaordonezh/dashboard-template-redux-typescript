export interface StateGlobalProps {
  sidebar: {
    open: boolean;
  };
  navbar: {
    account: {
      open: boolean;
      ref: HTMLElement;
    };
    notification: {
      open: boolean;
      ref: HTMLElement;
    };
    search: {
      open: boolean;
    };
  };
}

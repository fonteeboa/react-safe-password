export interface SwitchConfig {
    label: string;
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
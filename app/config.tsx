import { createContext, ReactNode, useContext } from "react";

export type Config = {
  ROLLBAR_ACCESS_TOKEN: string;
}

const ConfigContext = createContext<Config | undefined>(undefined);
ConfigContext.displayName = 'ConfigContext';

export const useConfig = (): Config => {
  const v = useContext(ConfigContext);

  if (!v) {
    throw new Error('ConfigContext not found');
  }

  return v;
}

type ConfigContextProviderProps = {
  config: Config;
  children: ReactNode;
}

export const ConfigContextProvider = ({ config, children }: ConfigContextProviderProps) => {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
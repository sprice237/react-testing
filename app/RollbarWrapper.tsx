import { Provider } from '@rollbar/react';
import { ReactNode } from 'react';
import { useConfig } from './config';

type RollbarWrapperProps = {
  children?: ReactNode;
}

export function RollbarWrapper({ children }: RollbarWrapperProps) {
  const { ROLLBAR_ACCESS_TOKEN } = useConfig();

  const rollbarConfig = {
    accessToken: ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      client: {
        javascript: {
          code_version: '1.0.0',
          source_map_enabled: true
        }
      }
    }
  };

  return (
    <Provider config={rollbarConfig}>
      {children}
    </Provider>
  );
}
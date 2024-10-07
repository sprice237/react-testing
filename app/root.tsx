import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import { RollbarWrapper } from './RollbarWrapper';
import { Hello } from './Hello';
import { TriggerError } from "./TriggerError";
import { Config, ConfigContextProvider } from "./config";

export async function loader() {
  return json({
    config: {
      ROLLBAR_ACCESS_TOKEN: process.env.ROLLBAR_ACCESS_TOKEN!,
    } satisfies Config
  });
}

export default function App() {
  const { config } = useLoaderData<typeof loader>();
  console.log('config', config);

  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <ConfigContextProvider config={config}>
          <RollbarWrapper>
            <Hello />
            <TriggerError />
            <Outlet />
          </RollbarWrapper>
        </ConfigContextProvider>
        <Scripts />
      </body>
    </html>
  );
}

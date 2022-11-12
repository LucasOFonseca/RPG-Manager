import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppTheme } from "../shared/components/AppTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <Component {...pageProps} />
    </AppTheme>
  );
}

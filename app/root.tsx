import type * as React from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router'
import { ThemeProvider } from 'styled-components'
import { theme } from './Custom/theme'
import { GlobalStyle } from './Custom/theme/GlobalStyle'
import { Layout as SiteLayout } from './Custom/components/Layout'
export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="ru">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteLayout>{children}</SiteLayout>
      </ThemeProvider>
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
)
export default function App() {
  return <Outlet />
}
export const ErrorBoundary: React.FC = () => {
  const error = useRouteError()
  return (
    <>
      <h1>
        {isRouteErrorResponse(error)
          ? `${error.status} — Страница недоступна`
          : 'Не удалось открыть страницу'}
      </h1>
      <a href="/">На главную</a>
    </>
  )
}

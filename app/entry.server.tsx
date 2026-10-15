import { ServerStyleSheet } from 'styled-components'
import { renderToReadableStream } from 'react-dom/server'
import { ServerRouter, type EntryContext } from 'react-router'

// Build-time rendering only. No renderer is deployed to the file server.
export default async function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext,
) {
  const sheet = new ServerStyleSheet()
  try {
    const body = await renderToReadableStream(
      sheet.collectStyles(<ServerRouter context={context} url={request.url} />),
      {
        signal: request.signal,
        onError(error) {
          status = 500
          console.error(error)
        },
      },
    )
    await body.allReady
    headers.set('Content-Type', 'text/html; charset=utf-8')
    const html = await new Response(body).text()
    return new Response(
      html.replace('</head>', `${sheet.getStyleTags()}</head>`),
      { status, headers },
    )
  } finally {
    sheet.seal()
  }
}

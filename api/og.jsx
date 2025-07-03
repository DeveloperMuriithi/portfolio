// api/og.jsx
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handler(req) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') || 'Developer Muriithi'
  const subtitle = searchParams.get('subtitle') || 'Developer & Pentester'

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#0f0f0f',
          color: '#00ff88',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          padding: 64,
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 72, marginBottom: 20 }}>{title}</h1>
        <p style={{ fontSize: 36, color: '#c5c8c6' }}>{subtitle}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

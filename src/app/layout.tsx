import StyledComponentsRegistry from "../../lib/registry"

export const metadata = {
  title: 'Medway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/medway.png" />
      </head>
      <StyledComponentsRegistry>
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}

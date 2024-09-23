import StyledComponentsRegistry from "../../lib/registry";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: 'Medway',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/medway.png" />
      </head>
      <StyledComponentsRegistry>
        <ClientWrapper>
          <body>{children}</body>
        </ClientWrapper>
      </StyledComponentsRegistry>
    </html>
  );
}

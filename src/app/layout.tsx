import './globals.css';
import ThemeRegistry from '../../Theme/ThemeRegistry';

export const metadata = {
  title: 'E-commrece Women Clothing',
  description: 'A E-commerece clothing for Women',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

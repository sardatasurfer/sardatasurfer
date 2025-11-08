export const metadata = {
  title: "SardataSurfer",
  description:
    "We surf through data of and from Sardinia. Energy, environment, air quality, satellite observations — no opinions, just facts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "Arial, sans-serif", color: "#0b2a4a", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

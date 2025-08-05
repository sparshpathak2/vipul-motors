export const metadata = {
  title: "Our Outlets | Vipul Motors",
  description: "Find Vipul Motors Arena and NEXA showrooms near you across multiple locations. Visit us for a seamless car buying experience.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

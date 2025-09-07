export const metadata = {
    title: "Maruti True Value | Vipul Motors",
    description: "Buy and sell used Maruti Suzuki cars through Vipul Motors’ True Value with complete trust, inspection, and certification.",
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

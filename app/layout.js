import './globals.css'

export const metadata = {
  title: 'Olives Coffee Trail - אוליבס קפה בין הזיתים',
  description: 'חוויית קפה אותנטית בלב הטבע - Authentic coffee experience in nature',
  keywords: 'קפה, אוליבס, coffee, olives, trail, nature, authentic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-hebrew">
        {children}
      </body>
    </html>
  )
}

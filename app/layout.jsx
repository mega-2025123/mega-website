import './globals.css';

export const metadata = {
  title: 'MEGA — Mechanical Engineering Guild Association | NSRIET',
  description: 'Official website of the Mechanical Engineering Guild Association (MEGA) at N S Raju Institute of Engineering and Technology (NSRIET), Visakhapatnam. Established 2025.',
  keywords: ['MEGA', 'NSRIET', 'Mechanical Engineering', 'Mechanical Guild', 'Visakhapatnam', 'Engineering Club'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

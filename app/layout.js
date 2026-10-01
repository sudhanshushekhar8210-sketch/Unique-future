import './globals.css';

export const metadata = {
  title: 'Unique Future HR Consultancy | Human Resources & Manpower Solutions',
  description: 'Unique Future HR Consultancy — professional manpower recruitment and human resource solutions across UAE, India, Nepal and Kenya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

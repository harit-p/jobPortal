import "@/app/globals.css";
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Poppins } from 'next/font/google';
import { Notifications } from '@mantine/notifications';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import Header from '@/Header/Header';
import Footer from '@/Footer/Footer';

export const metadata = {
  title: 'Job Portal App',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
      fontFamily:"poppins, sans-serif",
      primaryColor:'brightSun',
      primaryShade:4,
      colors:{
        'mineShaft': [
          '#f6f6f6',
          '#e7e7e7',
          '#d1d1d1',
          '#b0b0b0',
          '#888888',
          '#6d6d6d',
         '#5d5d5d',
          '#4f4f4f',
          '#454545',
        '#3d3d3d',
          '#2d2d2d',
        ],
  
        'brightSun': [
         '#fffbeb',
          '#fff3c6',
          '#ffe588',
          '#ffd149',
          '#ffbd20',
          '#f99b07',
          '#dd7302',
         '#b75006',
         '#943c0c',
          '#7a330d',
          '#461902',
        ],
      },
      
    })
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <ColorSchemeScript />
      </head>
            <body>
              <MantineProvider defaultColorScheme='dark' theme={theme}>
              <Notifications position="top-center" zIndex={1000}/>
                <div className="relative">
              <Header />{children}
              <Footer />
              </div>
              </MantineProvider>
            </body>
          </html>
          );
}
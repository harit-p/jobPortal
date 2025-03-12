'use client'


import './globals.css';
import { createTheme, MantineProvider, Slider } from "@mantine/core";
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import  HomePage from "@/app/find-jobs/HomePage";
import { Notifications } from '@mantine/notifications';




export default function Home() {

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
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <HomePage/>
        
      </MantineProvider>
  );
}

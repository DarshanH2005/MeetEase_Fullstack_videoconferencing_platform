import React from 'react'
import VideoMeet from './VideoMeet'
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/appTheme';
import AppAppBa from '../mainpage/components/AppAppBa';
import Her from '../mainpage/components/Her';

import Footer from '../mainpage/components/Footer';



export default  function Join(props) {
  return (
    <AppTheme {...props}>
          <CssBaseline enableColorScheme />
          <AppAppBa />
          <Her />
    <VideoMeet />
    <Divider />
    <Footer />
    </AppTheme>
  )
}




import React from 'react';
import {Box, Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <Box sx={{width:'60%', mx:"auto", mt:6}}>
      <Typography variant="h5" gutterBottom align='center'>
        Заявка успешно отправлена
      </Typography>
      <Typography variant="subtitle1">
        Ваша заявка в процессе рассмотрения. В течение дня вы получите письмо на электронную почту о подтверждении 
      </Typography>
    </Box>
  );
}

export default CheckoutSuccess;

import React from 'react';
import {Box, Typography } from '@material-ui/core';
import Header from '../../../Components/Header';
import {
  MenuIcon,
  XIcon,
  ChatIcon,
  ChevronDownIcon,
  UserIcon,
  DesktopComputerIcon,
  HeartIcon,
  LogoutIcon,
  CogIcon,
  BookmarkIcon,
  BellIcon
} from "@heroicons/react/outline";
import logo from "../../../image/logo.png";
import { Link } from "react-router-dom";
function CheckoutSuccess() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mx-8">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto mr-12"
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </div>

              </div>
         
            </div>
          </div>
    <Box sx={{width:'60%', mx:"auto", mt:6}}>
      <Typography variant="h5" gutterBottom align='center'>
        Заявка успешно отправлена
      </Typography>
      <Typography variant="subtitle1">
        Ваша заявка в процессе рассмотрения. В течение дня вы получите письмо на электронную почту о подтверждении 
      </Typography>
    </Box>
    </>
    
  );
}

export default CheckoutSuccess;

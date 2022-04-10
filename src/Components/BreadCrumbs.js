import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BreadCrumbs({routes}) {
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb" sx={{mt:6}} ml={{xs:2, md:15}}>
        {routes.map((e, index)=>{
            return(
                index===routes.length-1 ? <Typography key={index} color="text.primary">{e.name}</Typography> : 
                <Link key={index} underline="hover" color="inherit" href={e.route}>
                {e.name}
              </Link>
            )
        })}
      </Breadcrumbs>
    </div>
  );
}
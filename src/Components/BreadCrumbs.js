import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbs({routes}) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" sx={{mt:6, ml:15}}>
        {routes.map((e, index)=>{
            return(
                index===routes.length-1 ? <Typography color="text.primary">{e.name}</Typography> : 
                <Link underline="hover" color="inherit" href={e.route}>
                {e.name}
              </Link>
            )
        })}
      </Breadcrumbs>
    </div>
  );
}
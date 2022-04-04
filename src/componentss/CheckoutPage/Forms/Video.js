import React from 'react';
import InputField from "../../FormFields/InputField";
import {Button, Grid, Typography , Box} from '@mui/material';

export default function Video(props){
    const {
        formField: { video_link }
      } = props;
    return (
        <Box sx={{width:'60%', mx:"auto"}}>
            <Typography variant='h5'>Видео</Typography>
            <Typography variant='subtitle1'>Запишите видео и представтесь студентам</Typography>
            <Grid container>
                <Grid item xs={12}>
                    <InputField name={video_link.name} label={video_link.label} fullWidth />
                </Grid>
                <Grid item xs={12} sx={{mt:4}}>
                    <Typography variant='h6'>Советы для отличного видео</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>1. Длина видео должна быть 30 сек - 2 мин</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>2. Запишите видео в горизонтальном режиме</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>3. Без слайд шоу и презентаций</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>4. Радушно приветствуйте своих учеников</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>5. Подчеркните ваши навыки и опыты работы</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>6. Побуждайте студентов записаться на уроки</Typography>
                    <Typography variant='subtitle1' sx={{color: 'gray'}}>7. Без логотипов, ссылок или контактных данных</Typography>

                </Grid>

            </Grid>

        </Box>
    );

}
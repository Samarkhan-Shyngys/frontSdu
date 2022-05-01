import React from 'react';
import {Grid, Typography , Box} from '@mui/material';
import { TextField } from "formik-material-ui";
import {Field } from "formik";
export default function Video(props){
    return (
        <Box >
            <Typography variant='h5' pb={1}>Видео</Typography>
            <Typography variant='subtitle1' pb={2}>Запишите видео и представтесь студентам</Typography>
            <Grid container spacing={3} component="section">
                <Grid item xs={12}>
                    <Field name="video" label="Video" fullWidth component={TextField}/>
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

Video.label = "Видео";
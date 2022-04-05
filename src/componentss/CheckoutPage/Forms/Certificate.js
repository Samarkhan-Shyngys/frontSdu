import React from 'react';
import InputField from "../../FormFields/InputField";
import CheckboxField from '../../FormFields/CheckBoxField';
import {Button, Grid, Typography , Box} from '@mui/material';

export default function Certificate(props){
    const {formField: { certificate_name, certificate_description, no_certificate}} = props;
    return(
        <Box  sx={{width:'60%', mx:"auto"}}>
            <Typography variant="h6">
                Сертификаты
            </Typography>
            <Typography variant="subtitle1"  sx={{ color: "gray" }}>
                Если у вас есть сертификаты, опишите их, чтобы профиль вызывал доверие
            </Typography>
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Сертификат</Typography>
                    <InputField name={certificate_name.name} label={certificate_name.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Описание</Typography>
                    <InputField name={certificate_description.name} label={certificate_description.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">Фото сертификата</Typography>
                    <Typography variant="subtitle2">Загрузите свой сертификат (PDF, JPG), чтобы повысить степень доверия к вашей анкете</Typography>
                    <Button variant="outlined" component="label" sx={{width:200, height:120}}>
                        <input type="file" hidden />
                    </Button>                
                </Grid>
                <Grid item xs={12}>
                    <CheckboxField name={no_certificate.name} label={no_certificate.label}/>
                </Grid>

            </Grid>
        </Box>

    )
}
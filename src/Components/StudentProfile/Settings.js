import React from "react";
import { Box, Grid, TextField, Typography} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
const fetchedData = {
      current_password: "1234",
      new_password: "123456",
      new_password1: "123456",

}

const Settings = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: fetchedData ? fetchedData : {
      current_password: "",
      new_password: "",
      new_password1: "",
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Настройки
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Controller
              name="current_password"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Действующий пароль"  type="password"/>
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="new_password"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Новый пароль"  type="password" />
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="new_password1"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Повторите пароль" type="password" />
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <button className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium text-xl">
              Сохранить изменения
            </button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Settings;

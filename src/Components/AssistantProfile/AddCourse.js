import React, { useState } from "react";
import Table from "./Table";
import MyButton from "./Button";
import { useForm, Controller } from "react-hook-form";
import {Avatar, Badge,TextField,Box,Typography,Grid,MenuItem,Button,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const format = [
  { label: "Онлайн", value: "Онлайн" },
  { label: "Оффлайн", value: "Оффлайн" },
];

const AddCourse = () => {
  const [avatarPreview, setAvatarPreview] = useState("../../images/12.webp");
  const { control, handleSubmit, register, getValues,setValue} = useForm({
    defaultValues: {
      image: "",
      courseName: "",
      format: "",
      about: "",
      select: [{}],
    },
  });
  const onSubmit = (data) => console.log(data);
  const handleImage=(e)=>{
    // setAvatarPreview(e.target.files[0]);
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        console.log(e.target.result)
        setValue("image", e.target.result)
        setAvatarPreview(
          e.target.result);
      
      };
    }
  };
  

  return (
    <Box container>
      <Typography variant="h6">Добавить курс</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} component="section">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              badgeContent={
                <Button
                  name="image"
                  variant="text"
                  component="label"
                  startIcon={<AddIcon />}
                >
                  {/* <Controller
                    name="image"
                    control={control}
                    render={({ field }) => ( */}
                      <input
                        // {...field}
                        name="imag"
                        className="hidden"
                        accept="image/*"
                        type="file"
                         onChange={handleImage}
                        // onChange={(e)=> setValue("image", String(handleImage(e)))}
                      />
                    {/* )} */}
                  {/* /> */}
                
                </Button>
              }
            >
              <Avatar
                src={getValues("image")}
                sx={{ width: 300, height: 150 }}
                variant="square"
              />
            </Badge>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="courseName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Название курса" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              defaultValue=""
              label="Формат курса"
              inputProps={register("format", {
                required: "Please enter format",
              })}
            >
              {format.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="about"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Описание курса" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
          <Grid item xs={12}>
            <MyButton text="Сохранить изменения" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddCourse;

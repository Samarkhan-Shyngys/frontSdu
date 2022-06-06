import React, { useState } from "react";
import Table from "./Table";
import MyButton from "./Button";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Avatar,
  Badge,
  TextField,
  Box,
  Typography,
  Grid,
  MenuItem,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { base_url } from "../../utils/request";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const id = 1;

const format = [
  { label: "Онлайн", value: "0" },
  { label: "Оффлайн", value: "1" },
];



const BookDetail = () => {
    const datas = 
        {
          image: require("../../image/book4.png"),
          courseName: "Algorithm",
          format: "0",
          about: "Good book",
          date: [{ time: "Monday-10" }, { time: "Wednesday-11" }, { time: "Friday-12" }, { time: "Friday-15" }],
        };
    
  const [avatarPreview, setAvatarPreview] = useState("../../images/12.webp");
  const { control, handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: datas
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "date",
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`${base_url}/api/assistant/get/course/${id}`, data);
  };

  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      console.log("file:", file);
      setValue("photo", file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("image", e.target.result);
        setAvatarPreview(e.target.result);
      };
    }
  };
  return (
    <Box container>
      <Typography variant="h6" sx={{pb:2}}>Добавить курс</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={8} component="section">
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
                  <input
                    name="imag"
                    className="hidden"
                    accept="image/*"
                    type="file"
                    onChange={handleImage}
                  />
                </Button>
              }
            >
              <Avatar
                src={getValues("image") || avatarPreview}
                sx={{ width: 300, height: 150 }}
                variant="square"
              />
            </Badge>
          </Grid>
          <Grid item xs={10}>
            <Controller
              name="courseName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Название курса" />
              )}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              select
              fullWidth
              defaultValue={datas.format || ""}
              label="Формат курса"
              inputProps={register("format")}
            >
              {format.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={10}>
            <Controller
              name="about"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Описание курса" />
              )}
            />
          </Grid>
          <Grid item xs={10}>
            <Table
              data = {datas.date}
              setValue={setValue}
              fields={fields}
              append={append}
              remove={remove}
            />
          </Grid>
          <Grid item xs={10 }>
            <MyButton text="Сохранить изменения" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default BookDetail;

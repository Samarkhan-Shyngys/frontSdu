import React, { useState } from "react";
import {
  Avatar,
  Badge,
  TextField,
  Box,
  Typography,
  Grid,
  Button,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import MyButton from "./Button";
const AddBook = () => {
  const [avatarPreview, setAvatarPreview] = useState("../../images/12.webp");
  const [name, setName] = useState("");
  const { control, handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: {
      image: "",
      bookName: "",
      author: "",
      file: "",
    },
  });
  const onSubmit = (data) => console.log(data);


  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("image", e.target.result);
        setAvatarPreview(e.target.result);
      };
    }
  };
  const handleName = (e) =>{
    setName(e.target.files[0].name);
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("file", e.target.result);
      };
    }

  }
  return (
    <Box container>
      <Typography variant="h6" sx={{mb:2}}>Добавить книгу</Typography>
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
                    // {...field}
                    name="image"
                    className="hidden"
                    accept="image/*"
                    type="file"
                    onChange={handleImage}
                    // onChange={(e)=> setValue("image", String(handleImage(e)))}
                  />
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
          <Grid item xs={8}>
            <Controller
              name="bookName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Название книги" />
              )}
            />
          </Grid>

          <Grid item xs={8}>
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth label="Автор книги" />
              )}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label={name}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      name="image"
                      variant="text"
                      component="label"
                      startIcon={<FileUploadIcon />}
                    >
                      <input
                        type="file"
                        name="file"
                        {...register("file")}
                        className="hidden"
                        onChange={handleName}
                      />
                    </Button>
                  </InputAdornment>
                ),
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <MyButton text="Добавить" />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddBook;

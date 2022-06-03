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
import {base_url} from "../../utils/request";
import { useHistory } from "react-router-dom";
import { ASSISTANT_BOOK } from "../../utils/consts";

async function addBooks(credentials){
  console.log(credentials.image);
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  
  const data2 = new FormData();
  data2.append('bookName', credentials.bookName)
  data2.append('author', credentials.author)
  data2.append('file', credentials.file)
  data2.append('id', id);
  if(credentials.image!="null"){
    console.log("sssss", credentials.image );
    data2.append('image', credentials.image)
  }

  return fetch(`${base_url}/api/assistant/add/book`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}
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

  const history = useHistory();
  // const onSubmit = (data) => addBooks(data);
  const onSubmit = async(data) =>{
    const result = await addBooks(data);
    console.log(result.status)
    if(result.status===200){
      history.push(ASSISTANT_BOOK);
    }
  }; 


  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("image", e.target.result);
        setAvatarPreview(e.target.result);
        setValue("image", file);
      };
      setValue("image", file);
    }
  };
  const handleName = (e) =>{
    setName(e.target.files[0].name);
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setValue("file", file);
      };
    }

  }
  return (
    <Box container>
      <Typography variant="h6">Добавить книгу</Typography>
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

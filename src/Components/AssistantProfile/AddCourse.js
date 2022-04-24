import React, { useState, useEffect } from "react";
import Table from "./Table";
import MyButton from "./Button";
import { useForm, Controller , useFieldArray} from "react-hook-form";
import {Avatar, Badge,TextField,Box,Typography,Grid,MenuItem,Button,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {base_url} from "../../utils/request";
import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));
const id = user.id;
async function addCourses(credentials) {
  
  console.log("rrr", credentials.date)
  console.log("ssssyyy", JSON.stringify(credentials.date))
  const data2 = new FormData();
  data2.append('courseName', credentials.courseName)
  data2.append('about', credentials.about)
  data2.append('format', credentials.format)
  data2.append('dates', JSON.stringify(credentials.date))
  data2.append('file', credentials.photo)
  
  // if(credentials.image!="null"){
  //   console.log("sssss");
  //   data2.append('file', credentials.photo)
  // }
  

  return fetch(`${base_url}/api/assistant/add/course/${id}`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}

const format = [
  { label: "Онлайн", value: "1" },
  { label: "Оффлайн", value: "0" },
];

const AddCourse = () => {
  const [avatarPreview, setAvatarPreview] = useState("../../images/12.webp");
  const { control, handleSubmit, register, getValues,setValue} = useForm({
    defaultValues: {
      image: "",
      photo: "",
      courseName: "",
      format: "",
      about: "",
      date: [],
    },
  });
  const { fields, append , remove} = useFieldArray({
    control,
    name: "date",
  });

  useEffect(async () => {
    const result = await axios(base_url+
      '/api/assistant/get/course/'+id
    );
    const profile = JSON.parse(JSON.stringify(result.data));
    console.log(result);
    
  }, []);

  const onSubmit = (data) =>{
    console.log(data)
    const token =  addCourses(data);
    if (token.status === 200) {
      token.json().then((json) => {
        console.log(json);
        
        
      });
    }
  };
  
  
  
  
  
  // console.log(data);
  const handleImage=(e)=>{
    if (window.FileReader) {
      var file = e.target.files[0];
      setValue("photo", file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
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
              inputProps={register("format")}
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
            <Table setValue={setValue} fields={fields} append={append} remove={remove}/>
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

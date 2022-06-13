import React, { useState, useEffect } from "react";
import Table from "./Table";
import MyButton from "./Button";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Select from 'react-select';
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
import { ASSISTANT_COURSE } from "../../utils/consts";
import { useHistory } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("user"));
const id = 1;

async function editCourse(credentials, courseId) {
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
  

  return fetch(`${base_url}/api/assistant/edit/course/${courseId}`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}

const formats = [
  { label: "Онлайн", value: "onn" },
  { label: "Оффлайн", value: "off" },
];




const CourseDetail = () => {
  const params = useParams();
  const courseId = params.id;
  const [theArray, setTheArray] = useState();
  const [data, setData] = useState({
    image: "null",
    courseName: "",
    format: "",
    about: "",
    date: [],
  });
  // useEffect(()=>{
  //   axios.get( `${base_url}/api/assistant/get/assistant/course/${courseId}`)
  //   .then((result) => setTheArray(result.data.courses)
  //   )
  //   .catch(((er)=>console.log(er)))
  // }, []);  
  const [avatarPreview, setAvatarPreview] = useState("../../images/12.webp");
  useEffect(async () => {
    if (courseId !== "") {
      const result = await axios(base_url+
        '/api/assistant/get/assistant/course/'+courseId
      );
      const profile = JSON.parse(JSON.stringify(result.data));
      console.log(profile.courseName);
      setTheArray(profile.format);
      setData({
        ...data,
        ["courseName"]: profile.courseName,
        ["image"]: profile.photoPath,
        ["format"]: profile.format,
        ["about"]: profile.about,
        ["date"]: profile.dates,
        
      });
    }
    
    
  }, []);
    const datas = 
        {
          image: require("../../image/book4.png"),
          courseName: "",
          format: "off",
          about: "",
          date: [],
        };
        
  

  const { control, handleSubmit, register, getValues, setValue, reset } = useForm({
      defaultValues: data
    });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "date",
  });
  
  console.log('array ' + data.format)
  const history = useHistory();
  const onSubmit = async(data) => {
    const token =  await editCourse(data, courseId);
    if (token.status === 200) {
      history.push(ASSISTANT_COURSE);
      
    }
    // axios.post(`${base_url}/api/assistant/get/course/${id}`, data);
  };
  useEffect(() => {
    // reset form with user data
    reset(data);
}, [data]);
  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
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
                src={base_url + data.image}
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
              defaultValue={theArray}
              label="Формат курса"
              inputProps={register("format")}
            >
              {formats.map((option) => (
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
              data = {data.date}
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

export default CourseDetail;

import React, { useState, useEffect  } from "react";
import level from "../../Constants/Level";
import languages from "../../Constants/Language";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/outline";
import { Grid,Box} from "@mui/material";
import { Field, Formik, Form, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import SelectField from "../../componentss/FormFields/SelectField";
import axios from "axios";
import {base_url} from "../../utils/request";


async function editProfile(credentials) {
  const data2 = new FormData();
  data2.append('firstname', credentials.firstname)
  data2.append('lastname', credentials.lastname)
  data2.append('email', credentials.email)
  data2.append('faculty', credentials.faculty)
  data2.append('profession', credentials.profession)
  data2.append('phone', credentials.phone)
  console.log("cred:", credentials)
  if(credentials.photo!="null"){
    console.log("sssss", credentials.photo );
    data2.append('file', credentials.photo)
  }
  

  return fetch(`${base_url}/api/assistant/edit/profile`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}
const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [preview, setPreview] = useState(require("../../image/12.webp"));
  const initialValues = {
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    faculty: "",
    profession: "",
    phone: "",
    languages: [{ name: "", level: "" }],
    about: ",",
  };
  const [data, setData] = useState({
    photo: "null",
    firstname: "",
    lastname: "",
    email: "",
    faculty: "",
    profession: "",
    phone: "",
    languages: [{ name: "rus", level: "A1" }],
  });
  useEffect(async () => {
    if (id !== "") {
      const result = await axios(base_url+
        '/api/assistant/profile/'+id
      );
      const profile = JSON.parse(JSON.stringify(result.data));
      console.log(profile.firstname);

      setData({
        ...data,
        ["email"]: user.email,
        ["firstname"]: profile.firstname,
        ["lastname"]: profile.lastname,
        ["faculty"]: profile.faculty,
        ["profession"]: profile.profession,
        ["phone"]: profile.phone,
        ["about"]:profile.about,
  
      });
    }
    
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        initialValues.image = e.target.result;
        setPreview(e.target.result);
        setData({
          ...data,
          ["photo"]: file,
        });
      };
    }
  };
  console.log(initialValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const token = await editProfile(data);
    if (token.status === 200) {
      token.json().then((json) => {
        console.log(json);
        
        
      });
    }
  };
  return (
    <Box>
      <Grid container>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="languages">
                {({ push }) => (
                  <Grid container spacing={3} component="section">
                    <Grid item xs={12}>
                      <label>
                        <img
                          src={initialValues.image || preview}
                          className="relative w-48 h-48 rounded-full"
                          alt="profile"
                        />
                        <PlusIcon className="absolute z-10 h-6 w-6 ml-40 -mt-12 bg-gray-900 rounded-full text-white" />
                        <input
                          name="image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImage}
                        />
                      </label>
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="firstName"
                        label="Имя"
                        fullWidth
                        component={TextField}
                        value={data.firstname}
                        placeholder={data.firstname!=""?data.firstname:"Введите ваше имя"}
                        onChanged={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        component={TextField}
                        value={data.lastname}
                        placeholder="Введите вашу фамилию"
                        onChanged={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="email"
                        label="SDU-почта"
                        fullWidth
                        component={TextField}
                        value={data.email}
                        placeholder={data.email}
                        onChanged={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="faculty"
                        label="Факультет"
                        fullWidth
                        component={TextField}
                        value={data.faculty}
                        placeholder="Инженерии и естественных наук"
                        onChanged={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="profession"
                        label="Специализация"
                        fullWidth
                        component={TextField}
                        value={data.profession}
                        placeholder="Информационная система"
                        onChanged={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="phone"
                        label="Номер телефон"
                        fullWidth
                        component={TextField}
                        type="text"
                        value={data.phone}
                        placeholder="+7 (701) 123 45-67"
                        onChanged={handleChange}
                      />
                    </Grid>

                    {data.languages.length > 0 &&
                      data.languages.map((friend, index) => (
                        <>
                          <Grid item xs={9}>
                            <SelectField
                              name={`languages.${index}.name`}
                              label="Языки"
                              data={languages}
                              value={languages[index].value}
                              fullWidth
                            />
                          </Grid>

                          <Grid item xs={3}>
                            
                            <SelectField
                              name={`languages.${index}.level`}
                              label="Уровень"
                              data={level}
                              fullWidth
                            />
                          </Grid>
                        </>
                      ))}
                    
                    <Grid item xs={12}>
                      <button
                        type="button"
                        className="flex space-x-2"
                        onClick={() => push({ name: "", level: "" })}
                      >
                        <PlusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                        <span>Добавить язык </span>
                      </button>
                    </Grid>
                    <Grid item xs={12}>
                    <label>{"О себе"}</label>
                      <Field
                        name="about"
                        
                        fullWidth
                        component={TextField}
                        type="text"
                        value={data.about}
                        onChanged={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                    <button type="submit"
                          onClick={handleSubmit} className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium text-xl">
                        {"Сохранить изменения"}
                   </button>
                    </Grid>
                  </Grid>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </Grid>
    </Box>
  );
};

export default UserProfile;

import React, { useState } from "react";
import level from "../../Constants/Level";
import languages from "../../Constants/Language";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/outline";
import { Grid,Box} from "@mui/material";
import { Field, Formik, Form, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import SelectField from "../../componentss/FormFields/SelectField";

const UserProfile = () => {
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

  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        initialValues.image = e.target.result;
        setPreview(e.target.result);
      };
    }
  };
  console.log(initialValues);
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="email"
                        label="SDU-почта"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="faculty"
                        label="Факультет"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="profession"
                        label="Специализация"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        name="phone"
                        label="Номер телефон"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>

                    {values.languages.length > 0 &&
                      values.languages.map((friend, index) => (
                        <>
                          <Grid item xs={9}>
                            <label>{"Языки"}</label>
                            <SelectField
                              name={`languages.${index}.name`}
                              label="Языки"
                              data={languages}
                              fullWidth
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <label>{"Уровень"}</label>
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
                      <Field
                        name="about"
                        label="О себе"
                        fullWidth
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button text="Сохранить изменения" />
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

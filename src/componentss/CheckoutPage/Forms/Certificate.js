import React, { useState } from "react";
import InputField from "../../FormFields/InputField";
import CheckboxField from "../../FormFields/CheckBoxField";
import { Button, Grid, Typography, Box, Avatar } from "@mui/material";
import { Formik, Field, Form, FieldArray, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import { FourGMobiledataOutlined } from "@mui/icons-material";
const initialValues = {
  certificate: [
    {
      name: "",
      desc: "",
      photo: "",
    },
  ],
};

export default function Certificate(){
  const { values } = useFormikContext();
  const aa = useFormikContext();
  const [images, setImages] = useState([]); 
  
  const handleImage = (e, index) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      setImages(...images, file);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        
        aa.setFieldValue(`photo`, e.target.result);
    
      };
      console.log('log: ', images);
    }
  };
  return(
    <Box>
      <FieldArray name="certificate">
        {({push }) => (
         <Grid container spacing={3} component="section">
            {values.certificate.length > 0 &&
              values.certificate.map((friend, index) => (
                <>
                <Grid item xs={12}>
                    <label>{"Name"}</label>
                    <Field
                      name={`certificate.${index}.name`}
                      label="Certificate Name"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
              
                <Grid item xs={12}>
                    <label> {"Name"}</label>
                    <Field
                      name={`certificate.${index}.desc`}
                      label="Certificate description"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label>{"Photo"} </label>
                    <Field
                      type="file"
                      display="none"
                      accept="image/*"
                      name={`certificate[${index}].photo`}
                      component={TextField}
                      fullWidth
                      onChange={(e)=>handleImage(e, index)}
                    />
                  </Grid>
                 
               
                </>
              ))}
              <Grid item xs={12}>
              <button
              type="button"
              className="secondary"
              onClick={() => push({ name: "", desc: "", photo: "" })}
            >
              Add certificate
            </button>
              </Grid>
            
          </Grid>
        )}
      </FieldArray>
    </Box>
  )
 }

Certificate.label="Сертификаты";
 Certificate.initialValues = {
  certificate: [
    {
      name: "",
      desc: "",
      photo: ""
    }
  ]
};
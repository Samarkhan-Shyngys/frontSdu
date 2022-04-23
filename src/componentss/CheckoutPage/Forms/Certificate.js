import React, { useState } from "react";
import InputField from "../../FormFields/InputField";
import CheckboxField from "../../FormFields/CheckBoxField";
import { Button, Grid, Typography, Box, Avatar } from "@mui/material";

// export default function Certificate(props) {
//   const [preview, setPreview] = useState("");
//   const {
//     formField: { certificate_name, certificate_description, no_certificate , certificate},
//   } = props;
//   console.log(certificate[0].name);
//   return (
//     <Box sx={{ width: "60%", mx: "auto" }}>
//       <Typography variant="h6">Сертификаты</Typography>
//       <Typography variant="subtitle1" sx={{ color: "gray" }}>
//         Если у вас есть сертификаты, опишите их, чтобы профиль вызывал доверие
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="subtitle1">Сертификат</Typography>
//           <InputField
//             name={certificate[0].index}
//             label={certificate_name.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="subtitle1">Описание</Typography>
//           <InputField
//             name={certificate_name.name}
//             label={certificate_description.label}
//             fullWidth
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="subtitle1">Фото сертификата</Typography>
//           <Typography variant="subtitle2">
//             Загрузите свой сертификат (PDF, JPG), чтобы повысить степень доверия
//             к вашей анкете
//           </Typography>
//           <Button
//             variant="outlined"
//             component="label"
//             sx={{ width: 200, height: 120 }}
//           >
//              <Avatar src={preview} sx={{ width: 200, height: 120 }} variant="square"/>
//             <input
//               type="file"
//               hidden
//               onChange={(e) => {
//                 const fileReader = new FileReader();
//                 fileReader.onload = () => {
//                   if (fileReader.readyState === 2) {
//                     //formField.image=fileReader.result;
//                     // Formik.setFieldValue('image', fileReader.result);
//                     setPreview(fileReader.result);
//                   }
//                 };
//                 fileReader.readAsDataURL(e.target.files[0]);
//               }}
//             />
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <CheckboxField
//             name={no_certificate.name}
//             label={no_certificate.label}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import { Formik, Field, Form, FieldArray, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
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
  return(
    <Box>
      <FieldArray name="certificate">
        {({push }) => (
         <Grid container spacing={3} component="section">
            {values.certificate.length > 0 &&
              values.certificate.map((friend, index) => (
                <>
                <Grid item xs={12}>
                    <label htmlFor={`certificate.${index}.name`}>
                      {"Name"}
                    </label>
                    <Field
                      name={`certificate.${index}.name`}
                      label="Certificate Name"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
              
                <Grid item xs={12}>
                    <label htmlFor={`certificate.${index}.desc`}>
                      {"Name"}
                    </label>
                    <Field
                      name={`certificate.${index}.desc`}
                      label="Certificate description"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor={`certificate.${index}.photo`}>
                      {"Photo"}
                    </label>
                    <Field
                      type="file"
                      display="none"
                      name={`certificate.${index}.photo`}
                      label="Photo"
                      component={TextField}
                      fullWidth
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
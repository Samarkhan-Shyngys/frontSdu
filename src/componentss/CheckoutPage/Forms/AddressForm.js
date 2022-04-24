import React, { useState } from "react";
import {Field, useFormikContext} from "formik";
import {
  Badge,
  Grid,
  Typography,
  Box,
  Avatar,
  Button
} from "@mui/material";
import SelectField from "../../FormFields/SelectField";
import Language from "../../../Constants/Language";
import Level from "../../../Constants/Level";
import AddIcon from "@mui/icons-material/Add";
import { TextField } from "formik-material-ui";
const faculties = [
  {
    label: undefined,
    value: "None",
  },
  {
    value: "Engineering",
    label: "Engineering",
  },
  {
    value: "Business",
    label: "Business",
  },
  {
    value: "Law",
    label: "Law",
  },
];

const professions = [
  {
    value: null,
    label: "None",
  },
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "CS",
    label: "CS",
  },
  {
    value: "Lawyer",
    label: "Lawyer",
  },
];

const AddressForm=(props)=> {
  const [avatarPreview, setAvatarPreview] = useState("../../image/amico.png");
  const values = useFormikContext();
  const handleImage = (e) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        values.setFieldValue("image", e.target.result);
        setAvatarPreview(e.target.result);
      };
    }
  };
  return (
    <Box  component="section">
      <Typography variant="h6">Личные данные</Typography>
      <Typography variant="subtitle1" sx={{ color: "gray" }}>
        Заполните свои данные, чтобы перейте к следующему шагу
      </Typography>
      <Grid container spacing={3} component="section">
        <Grid item xs={12}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Button  variant="text" component="label" startIcon={<AddIcon />}>
                <input
                  name="image"
<<<<<<< HEAD
                  // display="none"
                  // accept="image/*"
                  // label="image"
=======
                  accept="image/*"
                  label="image"
>>>>>>> 873f69ae0a2e7dd939e4bd9fdb5ff14e05c00156
                  type="file"
                  hidden
                  onChange={handleImage}
                />
              </Button>
            }
          >
            <Avatar src={avatarPreview} sx={{ width: 150, height: 150 }} />
          </Badge>
        </Grid>
        <Grid item xs={12}>
          <Field name="firstname" label="Имя" fullWidth component={TextField}/>
        </Grid>
        <Grid item xs={12}>
          <Field name="lastname" label="Фамилия" fullWidth component={TextField}/>
        </Grid>
        <Grid item xs={12}>
          <Field name="email" label="SDU почта" fullWidth component={TextField}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            Факультет
          </Typography>
          <SelectField
            name="faculty"
            label="Faculty"
            data={faculties}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            Специализация
          </Typography>
          <SelectField
            name="Profession"
            label="Profession"
            data={professions}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: "black" }}>
            Номер телефона
          </Typography>
          <Field name="phone" label="Номер телефон" fullWidth component={TextField}/>
        </Grid>
        <Grid item xs={9}>
          <SelectField
            name="language"
            label="language"
            data={Language}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            name="level"
            label="level"
            data={Level}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            О себе
          </Typography>
          {/* <TextField multiline maxRows={4} name={about.name} label={about.label} fullWidth /> */}
          <Field multiline name="about" label="О себе" fullWidth component={TextField}/>
        </Grid>
      </Grid>
    </Box>
  );
}



AddressForm.label = "Личные данные";
AddressForm.initialValues = {
  image: "",
  firstname: "",
  lastname: ""
};

export default AddressForm;
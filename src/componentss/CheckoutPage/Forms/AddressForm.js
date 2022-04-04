import React, { useState } from "react";
import {
  Badge,
  Grid,
  Typography,
  Box,
  Button,
  Avatar,
  TextField,
} from "@mui/material";
import InputField from "../../FormFields/InputField";
import SelectField from "../../FormFields/SelectField";
import Language from "../../../Constants/Language";
import Level from "../../../Constants/Level";
import AddIcon from "@mui/icons-material/Add";
const faculties = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "1",
    label: "Engineering",
  },
  {
    value: "2",
    label: "Business",
  },
  {
    value: "3",
    label: "law",
  },
];

const professions = [
  {
    value: null,
    label: "None",
  },
  {
    value: "111",
    label: "IT",
  },
  {
    value: "222",
    label: "CS",
  },
  {
    value: "333",
    label: "Lawyer",
  },
];

export default function AddressForm(props) {
  const [avatarPreview, setAvatarPreview] = useState("../../image/amico.png");
  const {
    formField: {
      firstName,
      lastName,
      email,
      faculty,
      profession,
      phone,
      language,
      level,
      about,
    },
  } = props;
  return (
    <Box sx={{ width: "60%", mx: "auto" }}>
      <Typography variant="h6">Личные данные</Typography>
      <Typography variant="subtitle1" style={{ color: "gray" }}>
        Заполните свои данные, чтобы перейте к следующему шагу
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Box
            display='flex'
            textAlign='center'
            justifyContent='center'
            flexDirection='column'> */}

          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Button variant="text" component="label" startIcon={<AddIcon />}>
                <input
                  name="avatar"
                  display="none"
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  hidden
                  onChange={(e) => {
                    const fileReader = new FileReader();
                    fileReader.onload = () => {
                      if (fileReader.readyState === 2) {
                        // setFieldValue('avatar', fileReader.result);
                        setAvatarPreview(fileReader.result);
                      }
                    };
                    fileReader.readAsDataURL(e.target.files[0]);
                  }}
                />
              </Button>
            }
          >
            <Avatar src={avatarPreview} sx={{ width: 150, height: 150 }} />
          </Badge>
        </Grid>
        <Grid item xs={12}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            Факультет
          </Typography>
          <SelectField
            name={faculty.name}
            label={faculty.label}
            data={faculties}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            Специализация
          </Typography>
          <SelectField
            name={profession.name}
            label={profession.label}
            data={professions}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            Номер телефона
          </Typography>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={9}>
          <SelectField
            name={language.name}
            label={language.label}
            data={Language}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            name={level.name}
            label={level.label}
            data={Level}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" style={{ color: "black" }}>
            О себе
          </Typography>
          <TextField multiline maxRows={4} fullWidth>
            О себе
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
}

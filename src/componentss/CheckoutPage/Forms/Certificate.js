import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Field, FieldArray, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const initialValues = {
  certificate: [
    {
      name: "",
      desc: "",
      photo: "",
    },
  ],
};

export default function Certificate() {
  const { values } = useFormikContext();
  const aa = useFormikContext();

  const handleImage = (e, index) => {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        aa.setFieldValue(`certificate[${index}].photo`, e.target.result);
      };
    }
  };
  return (
    <Box>
      <FieldArray name="certificate">
        {({ push, remove }) => (
          <Grid container spacing={3} component="section">
            {values.certificate.length > 0 &&
              values.certificate.map((friend, index) => (
                <>
                  <Grid item xs={12}>
                    <Typography pb={2}>Сертификат</Typography>
                    {/* <label className="mb-2">{"Сертификат"}</label> */}
                    <Field
                      name={`certificate.${index}.name`}
                      label="Название сертификата"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography pb={2}>Описание</Typography>
                    <Field
                      name={`certificate.${index}.desc`}
                      label="Описание сертификата"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography pb={2}>Фото сертификата</Typography>
                    <Field
                      type="file"
                      display="none"
                      accept="image/*"
                      name={`certificate[${index}].photo`}
                      label=""
                      value=""
                      component={TextField}
                      fullWidth
                      hidden
                      onChange={(e) => handleImage(e, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button
                      type="button"
                      className="flex"
                      onClick={() => remove(index)}
                    >
                      <MinusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                      <span>Удалить сертификат</span>
                    </button>
                  </Grid>
                </>
              ))}
            <Grid item xs={12}>
              <button
                type="button"
                className="flex"
                onClick={() => push({ name: "", desc: "", photo: "" })}
              >
                <PlusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                <span>Добавить еще сертификат</span>
              </button>
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </Box>
  );
}

Certificate.label = "Сертификаты";
Certificate.initialValues = {
  certificate: [
    {
      name: "",
      desc: "",
      photo: "",
    },
  ],
};

import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SelectField from "../../FormFields/SelectField";
import Months from "../../../Constants/Months";
import Years from "../../../Constants/Years";
import { Field, FieldArray, useFormikContext } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const initialValues = {
  job: [
    {
      organisation: "",
      position: "",
      startWorkYear: "",
      startWorkMonth: "",
      endDate: "",
      endWorkMonth: "",
      endWorkYear: "",
    },
  ],
};

export default function Experience(props) {
  const { values } = useFormikContext();
  return (
    <Box fullWidth>
      <Typography variant="h6">Опыт работы</Typography>

      <FieldArray name="job">
        {({ remove, push }) => (
          <Grid container spacing={3} component="section">
            {values.job.length > 0 &&
              values.job.map((job, index) => (
                <>
                  <Grid item xs={12}>
                  <Typography variant="subtitle1" pb={1}>Организация</Typography>
                    <Field
                      name={`job.${index}.organisation`}
                      label="Организация"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant="subtitle1" pb={1}>Должность</Typography>
                    <Field
                      name={`job.${index}.position`}
                      label="Position"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Начало работы</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <SelectField
                      name={`job.${index}.startWorkMonth`}
                      label="Месяц"
                      data={Months}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <SelectField
                      name={`job.${index}.startWorkYear`}
                      label="Год"
                      data={Years}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">Окончание</Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ ml: 2 }}>
                    <Field
                      type="checkbox"
                      component={CheckboxWithLabel}
                      name={`job.${index}.endDate`}
                      Label={{ label: "По настоящее время" }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <SelectField
                      name={`job.${index}.endWorkMonth`}
                      label="Месяц"
                      data={Months}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectField
                      name={`job.${index}.endWorkYear`}
                      label="Год"
                      data={Years}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <button
                      type="button"
                      className="flex"
                      onClick={() => remove(index)}
                    >
                      <MinusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                      <span>Удалить место работы</span>
                    </button>
                  </Grid>
                </>
              ))}
            <Grid item xs={12}>
              <button
                type="button"
                className="secondary flex"
                onClick={() =>
                  push({
                    organisation: "",
                    position: "",
                    startWorkYear: "",
                    startWorkMonth: "",
                    endDate: "",
                    endWorkMonth: "",
                    endWorkYear: "",
                  })
                }
              >
               <PlusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                <span>Добавить еще место работы</span>
              </button>
            </Grid>
          </Grid>
        )}
      </FieldArray>
    </Box>
  );
}
Experience.label = "Опыт работы";
Experience.initialValues = {
  job: [
    {
      organisation: "",
      position: "",
      startWorkYear: "",
      startWorkMonth: "",
      endDate: "",
      endWorkMonth: "",
      endWorkYear: "",
    },
  ],
};

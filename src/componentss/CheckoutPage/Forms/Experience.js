import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SelectField from "../../FormFields/SelectField";
import Months from "../../../Constants/Months";
import Years from "../../../Constants/Years";
import { Field, FieldArray, useFormikContext } from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";

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
  const {values} = useFormikContext();
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
                    <label htmlFor={`job.${index}.organisation`}>
                      {"Organisation"}
                    </label>
                    <Field
                      name={`job.${index}.organisation`}
                      label="Organisation"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label htmlFor={`job.${index}.position`}>Position</label>
                    <Field
                      name={`job.${index}.position`}
                      label="Position"
                      component={TextField}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ml:2}}>
                    <Field
                      type="checkbox"
                      component={CheckboxWithLabel}
                      name={`job.${index}.endDate`}
                      Label={{ label: "endDate" }} 
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <SelectField
                      name={`job.${index}.startWorkMonth`}
                      label="startWorkMonth"
                      data={Months}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <SelectField
                      name={`job.${index}.startWorkYear`}
                      label="startWorkYear"
                      data={Years}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <SelectField
                      name={`job.${index}.endWorkMonth`}
                      label="endWorkMonth"
                      data={Months}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <SelectField
                      name={`job.${index}.endWorkYear`}
                      label="endWorkYear"
                      data={Years}
                      fullWidth
                    />
                  </Grid>
                </>
              ))}
            <Grid item xs={12}>
              <button
                type="button"
                className="secondary"
                onClick={() => push({organisation: "",
                    position: "",
                    startWorkYear: "",
                    startWorkMonth: "",
                    endDate: "",
                    endWorkMonth: "",
                    endWorkYear: "", })}
              >
                Add job
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

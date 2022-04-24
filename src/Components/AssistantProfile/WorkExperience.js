import React from "react";
import Button from "./Button";
import { Grid, Typography, Box } from "@mui/material";
import SelectField from "../../componentss/FormFields/SelectField";
import Months from "../../Constants/Months";
import Years from "../../Constants/Years";
import { Formik,Form,  Field, FieldArray} from "formik";
import { TextField, CheckboxWithLabel } from "formik-material-ui";
import {PlusIcon} from "@heroicons/react/outline"
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
const WorkExperience = () => {
  return (
    <Box fullWidth>
      <Formik
       initialValues={initialValues}
       onSubmit={values =>console.log(values)}
       >
      {({ values }) => (
        <Form>
            <FieldArray name="job">
              {({ remove, push }) => (
                <Grid container spacing={3} component="section">
                  {values.job.length > 0 &&
                    values.job.map((job, index) => (
                      <>
                        <Grid item xs={12}>
                         
                          <Field
                            name={`job.${index}.organisation`}
                            label="Организация"
                            component={TextField}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            name={`job.${index}.position`}
                            label="Должность"
                            component={TextField}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                        <Typography variant='subtitle1'>Начало работы</Typography>
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
                        <Grid item xs={12}>
                        <Typography variant='subtitle1'>Окончание</Typography>
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
                        className="flex space-x-2"
                        onClick={() => push({organisation: "",
                          position: "",
                          startWorkYear: "",
                          startWorkMonth: "",
                          endDate: "",
                          endWorkMonth: "",
                          endWorkYear: "", })}
                      >
                        <PlusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                        <span>Добавить еще место работы </span>
                      </button>
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
    </Box>
  );
};

export default WorkExperience;

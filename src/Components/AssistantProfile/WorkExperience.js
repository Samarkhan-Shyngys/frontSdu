import React, { useEffect } from "react";
import Button from "./Button";
import { Grid, Typography, Box } from "@mui/material";
import SelectField from "../../componentss/FormFields/SelectField";
import Months from "../../Constants/Months";
import Years from "../../Constants/Years";
import { Formik,Form,  Field, FieldArray} from "formik";
import { TextField} from "formik-material-ui";
import {PlusIcon, MinusIcon} from "@heroicons/react/outline"

// 
const data = false;
const initialValues = {
  job: data ? [
    {
      organisation: "",
      position: "",
      startWorkYear: "",
      startWorkMonth: "",
      endDate: "",
      endWorkMonth: "",
      endWorkYear: "",
    }
   
    
  ] : [
    {
      organisation: "SDU",
      position: "Teacher",
      startWorkYear: "2018",
      startWorkMonth: "Март",
      endDate: "",
      endWorkMonth: "",
      endWorkYear: "2017",
    },
    {
      organisation: "saaa",
      position: "bbb",
      startWorkYear: "",
      startWorkMonth: "",
      endDate: "",
      endWorkMonth: "",
      endWorkYear: "",
    },
  ],
};

const WorkExperience = () => {
  useEffect(()=>(
    console.log("render")
  ))
  return (
    <Box fullWidth>
      <Formik
       initialValues={initialValues}
       onSubmit={values =>console.log(values)}
       >
      {({ values }) => (
        <Form>
            <FieldArray name="job">
              {({ remove, push, control }) => (
                <Grid container spacing={3} component="section">
                  {values.job.length > 0 &&
                    values.job.map((job, index) => (
                      <React.Fragment key={`${index}${job.organisation}`}>
                        <Grid item xs={12}>
                          <Field
                            name={`job.${index}.organisation`}
                            control={control}
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
                        <Typography variant='subtitle1'>Окончание</Typography>
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
                        className="flex space-x-2"
                        onClick={() => remove(index)}
                      >
                        <MinusIcon className="h-6 w-6 border rounded-full mr-2 border-gray-800" />
                        <span>Удалить место работы </span>
                      </button>
                    </Grid>
                      </React.Fragment>
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

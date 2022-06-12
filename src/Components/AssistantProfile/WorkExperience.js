import React, {useState, useEffect } from "react";
import Button from "./Button";
import { Grid, Typography, Box } from "@mui/material";
import SelectField from "../../componentss/FormFields/SelectField";
import Months from "../../Constants/Months";
import Years from "../../Constants/Years";
import { Formik,Form,  Field, FieldArray} from "formik";
import { TextField} from "formik-material-ui";
import {PlusIcon, MinusIcon} from "@heroicons/react/outline"
import {base_url} from "../../utils/request";
import axios from "axios";

// 
const data = false;
const user = JSON.parse(localStorage.getItem("user"));
const id = user.id;
async function editWork(credentials) {
  console.log('credentials' +JSON.stringify(credentials.job))
  const data2 = new FormData();
  data2.append('jobs', JSON.stringify(credentials.job))
  
  
  // if(credentials.image!="null"){
  //   console.log("sssss");
  //   data2.append('file', credentials.photo)
  // }
  

  return fetch(`${base_url}/api/assistant/edit/work/${id}`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}


const WorkExperience = () => {
  
  const [isFormReady, setIsFormReady] = useState(false)
  const [theArray, setTheArray] = useState([]);
  const initialValues = {
    job: 
    [
      {
        organisation: "ssss",
        position: "",
        startWorkYear: "",
        startWorkMonth: "",
        endDate: "",
        endWorkMonth: "",
        endWorkYear: "",
      }
    ] 
  };
  const [theInitials, setTheInitials] = useState(initialValues);
  useEffect(()=>{
    axios.get( `${base_url}/api/assistant/get/work/${id}`)
    .then((result) => setTheInitials({job:  result.data.jobs}), setIsFormReady(true))
    .catch(((er)=>console.log(er)))
  }, []);
  // setTheWorks(theArray);
  console.log('ls: ' + JSON.stringify(theInitials.job)); 
  console.log('isReady: ' + isFormReady)
  // console.log('ls2: ' + JSON.stringify(theInitials.job[0])); 
  // console.log('lss: ' + JSON.stringify(initialValues.job[0]))
  return (
    <Box fullWidth>
      {
        theInitials.job.length>2? <Formik
        initialValues={theInitials}
        onSubmit={values =>
          editWork(values)
        }
        >
       {({ values }) => (
       
          
         <Form>
             <FieldArray name="job">
               {({ remove, push, control }) => (
                 <Grid container spacing={3} component="section">
                   {values.job.length>0 &&
                     values.job.map((job, index) => (
                       <React.Fragment key={`${index}${job.organisation}`}>
                         <Grid item xs={12}>
                           <Field
                             name={`job.${index}.organisation`}
                             value={job.organisation}
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
        </Formik>: null
      }
      
    </Box>
  );
};

export default WorkExperience;

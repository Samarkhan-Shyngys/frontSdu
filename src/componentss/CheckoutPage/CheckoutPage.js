import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {base_url} from "../../utils/request";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import Header from "../../Components/Header";
import AddressForm from "./Forms/AddressForm";
import Experience from "./Forms/Experience";
import Certificate from "./Forms/Certificate";
import Video from "./Forms/Video";
import SwipeableViews from "react-swipeable-views";
import { FlipToBackOutlined } from "@mui/icons-material";
import { SUCCESS_ROUTE } from "../../utils/consts";


async function submitEven(credentials) {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const data2 = new FormData();
  data2.append('firstname', credentials.firstname)
  data2.append('lastname', credentials.lastname)
  data2.append('job',  JSON.stringify(credentials.job))
  data2.append('certificate',  JSON.stringify(credentials.certificate))
  data2.append('profession', credentials.profession)
  data2.append('about', credentials.about)
  data2.append('email', credentials.email)
  data2.append('faculty', credentials.faculty)
  data2.append('language', credentials.language)
  data2.append('phone', credentials.phone)
  data2.append('video', credentials.video)
  
  
  if(credentials.image!="null"){
    data2.append('file', credentials.image)
    
  }
  return fetch(`${base_url}/api/assistant/stepper/${id}`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    const statusCode = response.status;
  
    return { statusCode };
  });
}



const steps = [AddressForm, Experience, Certificate, Video];

export default function CheckoutPage(props) {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  
  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handlePrev = () => {
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => [
    setActiveStep(Math.min(activeStep + 1, steps.length - 1)),
  ];

  const onSubmit = (values, formikBag) => {
    const { setSubmitting } = formikBag;
    
    
    if (!isLastStep()) {
      setSubmitting(false);
      handleNext();
      return;
    }
    
    const status = submitEven(values);
    status.then((res)=>{
      if(res.statusCode===200){
        history.push(SUCCESS_ROUTE);
      }  
    });    
    
     
    
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );
  return (
    <>
    <Header />
    <Box sx={{ width: "70%", mx: "auto", pt:10 }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, values }) => (
          <>
            <Form>
              <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{steps[index].label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <SwipeableViews index={activeStep}>
                {steps.map((step, index) => {
                  const Component = steps[index];
                  return <Component key={index}/>;
                })}
              </SwipeableViews>
              <Button
                disabled={activeStep === 0 || isSubmitting}
                onClick={handlePrev}
              >
                Previous
              </Button>
              <Button disabled={isSubmitting} type="submit">
                {isLastStep() ? "Submit" : "Next"}
              </Button>
            </Form>
            
          </>
        )}
      </Formik>
    </Box>
    </>
  );
}

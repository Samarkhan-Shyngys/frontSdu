import React, { useState } from "react";
import useStyles from "./styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Box,
} from "@material-ui/core";
import formInitialValues from "./FormModel/formInitialValues";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import { Formik, Form } from "formik";
import Header from "../../Components/Header";
import AddressForm from "./Forms/AddressForm";
import Experience from "./Forms/Experience";
import Certificate from "./Forms/Certificate";
import Video from "./Forms/Video";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";
import SwipeableViews from "react-swipeable-views";

const steps = [AddressForm, Experience, Certificate, Video];

export default function CheckoutPage(props) {
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

    console.log(values);

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
                  return <Component key={index} />;
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </>
        )}
      </Formik>
    </Box>
    </>
  );
}

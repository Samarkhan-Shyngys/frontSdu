import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import InputField from "../../FormFields/InputField";
import SelectField from "../../FormFields/SelectField";
import Months from "../../../Constants/Months";
import Years from "../../../Constants/Years";
import CheckboxField from "../../FormFields/CheckBoxField";

export default function PaymentForm(props) {
  const {
    formField: {
      organisation,
      position,
      startWorkYear,
      startWorkMonth,
      endDate,
      endWorkMonth,
      endWorkYear,
    },
  } = props;

  return (
    <Box sx={{ width: "60%", mx: "auto" }}>
      <Typography variant="h6">Опыт работы</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField
            name={organisation.name}
            label={organisation.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={position.name} label={position.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid> */}
        <Grid item xs={9}>
          <SelectField
            name={startWorkMonth.name}
            label={startWorkMonth.label}
            data={Months}
            fullWidth
          />
        </Grid>
        <Grid item xs={3}>
          <SelectField
            name={startWorkYear.name}
            label={startWorkYear.label}
            data={Years}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Окончание</Typography>
          <CheckboxField name={endDate.name} label={endDate.label} />
            </Grid>
          <Grid item xs={9}>
            <SelectField
              name={endWorkMonth.name}
              label={endWorkMonth.label}
              data={Months}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <SelectField
              name={endWorkYear.name}
              label={endWorkYear.label}
              data={Years}
              fullWidth
            />
          </Grid>
        </Grid>
    </Box>
  );
}

import React from 'react';
import { useField } from 'formik';
import InputLabel from '@mui/material/InputLabel';
import{ Select} from '@mui/material';
import {MenuItem} from '@material-ui/core'
import FormControl from '@mui/material/FormControl';

function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  return (
    <FormControl {...rest}>
      <InputLabel >{label}</InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ''} label={label} variant="outlined">
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}> 
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}



export default SelectField;

import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    image,
    firstName,
    lastName,
    email,
    faculty,
    profession,
    phone,
    language,
    level,
    position,
    startWorkYear,
    startWorkMonth,
    endWorkYear,
    endWorkMonth,
    about,
    certificate_name,
    certificate_image,
    certificate_description,
    no_certificate,
    video_link,
    certificate
  }
} = checkoutFormModel;


export default {
  [image.name]: '',
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [faculty.name]: '',
  [profession.name]: '',
  [phone.name]: '',
  [language.name]: "",
  [level.name]: '',
  [position.name]: '',
  [startWorkYear.name]: '',
  [startWorkMonth.name]: '',
  [endWorkMonth.name]: '',
  [endWorkYear.name]: '',
  [about.name]: '',
  [certificate_name.name]: '',
  [certificate_image.name]: '',
  [certificate_description.name]: '',
  [no_certificate]: '',
  [video_link]: '',
  [certificate]: [],
 
};

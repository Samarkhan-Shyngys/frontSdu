import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    faculty,
    profession,
    phone,
    language,
    level,
    position,
    startWork,
    about,
    certificate_name,
    certificate_description,
    no_certificate,
    video_link
  }
} = checkoutFormModel;


export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [email.name]: '',
  [faculty.name]: '',
  [profession.name]: '',
  [phone.name]: '',
  [language.name]: false,
  [level.name]: '',
  [position.name]: '',
  [startWork.name]: '',
  [about.name]: '',
  [certificate_name.name]: '',
  [certificate_description.name]: '',
  [no_certificate]: '',
  [video_link]: ''
};

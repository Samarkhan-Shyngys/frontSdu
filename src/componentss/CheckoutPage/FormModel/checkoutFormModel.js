export default {
    formId: 'checkoutForm',
    formField: {
      firstName: {
        name: 'firstName',
        label: 'Имя',
        requiredErrorMsg: 'First name is required'
      },
      lastName: {
        name: 'lastName',
        label: 'Фамилия',
        requiredErrorMsg: 'Last name is required'
      },
      email: {
        name: 'email',
        label: 'SDU-почта',
        requiredErrorMsg: 'Address Line 1 is required'
      },
      faculty: {
        name: 'faculty',
        label: 'Факультет'
      },
      profession: {
        name: 'profession',
        label: 'Специализация',
        requiredErrorMsg: 'City is required'
      },
      phone: {
        name: 'phone',
        label: '+7 (ХХХ) ХХХ ХХ-ХХ'
      },
      language: {
        name: 'language',
        label: 'Языки',
        requiredErrorMsg: 'Zipcode is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      level: {
        name: 'level',
        label: 'Уровень',
        requiredErrorMsg: 'Country is required'
      },
      about: {
        name: 'about',
        label: 'О себе'
      },
      position: {
        name: 'Должность',
        label: 'Должность',
        requiredErrorMsg: 'Name on card is required'
      },
      organisation: {
        name: 'Организация',
        label: 'Организация',
        requiredErrorMsg: 'Card number is required',
        invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
      },
      startWork: {
        name: 'Начало работы',
        label: 'Начало работы',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      endDate: {
        name: 'endDate',
        label: 'По настоящее время',
        requiredErrorMsg: 'CVV is required',
        invalidErrorMsg: 'CVV is invalid (e.g. 357)'
      },
      certificate_name: {
        name: 'certificate_name',
        label: 'Название сертификата'

      },
      certificate_description: {
        name: 'certificate_name',
        label: 'Описание сертификата'
      },
      no_certificate: {
        name: 'no_certificate',
        label: 'У меня пока нет сертифкатов'
      },
      video_link: {
        name: 'video_link',
        label: 'Ссылка на видео'
      }
    }
  };
  
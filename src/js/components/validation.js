
// V A L I D A T E
import JustValidate from 'just-validate';

const validation = new JustValidate('.contacts-grid__form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#FF5C00',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('.input-name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Как вас зовут?'
  }
])
.addField('.input-mail', [
  {
    rule: 'required',
    errorMessage: 'Поле обязательное для заполнения',
  },
  {
    rule: 'email',
    errorMessage: 'Укажите ваш e-mail',
  },
]);

import validator from 'validator';

export const required = (value) => {
    if (!value.toString().trim().length) {
        return <span className="form-error is-visible">Required</span>;
    }
};
 
export const validemail = (value) => {
    if (!validator.isEmail(value)) {
        return <span className="form-error is-visible">${value} is not a valid email.</span>;
    }
};

export const isEqual = (value, props, components) => {
    const bothUsed = components.password[0].isUsed && components.confirm[0].isUsed;
    const bothChanged = components.password[0].isChanged && components.confirm[0].isChanged;
  
    if (bothChanged && bothUsed && components.password[0].value !== components.confirm[0].value) {
      return <span className="form-error is-visible">Passwords are not equal.</span>;
    }
};
export const lt = (value, props) => {
    if (!value.toString().trim().length > props.maxLength) {
        return <span className="error">The value exceeded {props.maxLength} symbols.</span>
    }
};
 
export const validpassword = (value, props, components) => {
    if (value !== components['confirm'][0].value) { 
        return <span className="error">Passwords are not equal.</span>
    }
};
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            ref={register({ required: true })}
            data-testid='firstname'
          />
          {errors.firstName && (
            <p data-testid='yup-error-fname'>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
            data-testid='lastname'
          />
          {errors.lastName && (
            <p data-testid='yup-error-lname'>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input name="email" 
            ref={register({ required: true })} 
            data-testid='email' 
          />
          {errors.email && (
            <p data-testid='yup-error-email'>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        {/* Additional form element for stretch */}
        <div>
          <label htmlFor="checkbox">Agree to the TOS</label>
          <input 
            type='checkbox'
            name="tos"
            value={false}
            ref={register({ required: true })} 
            data-testid='tos'
            className='checkbox'
          />
        </div>
        {errors.tos && (
            <p data-testid='yup-error-tos'>Looks like there was an error: {errors.tos.type}</p>
          )}
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            ref={register({ required: false })} 
            data-testid='message'
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }} data-testid='pre-data'>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" value='submit' data-testid='submit'/>
      </form>
    </div>
  );
};

export default ContactForm;

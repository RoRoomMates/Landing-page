// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm } from '@formspree/react';
import Input from './Input';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgeqgwll");
  if (state.succeeded) {
      return <h4 className="mt-0 mb-8">
       Thanks for joining.
        </h4>;
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <Input id="email" type="email" name='email' label="Subscribe" labelHidden hasIcon="right" placeholder="Your email address">
            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
        </Input>
      </form>
  );
}
function FormSpree() {
  return (
    <ContactForm />
  );
}
export default FormSpree;

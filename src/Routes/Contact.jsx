import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context'; 

const Contact = () => {
  const { state } = useContext(ContextGlobal);


  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`contact ${themeClass}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions, and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
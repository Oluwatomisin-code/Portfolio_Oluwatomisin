import React from 'react';
import './Contact.css'
import TextField from '@material-ui/core/TextField';

function Contact() {
  return <div className='wrapContact' id="contact">
    <div>
      <h2>Get in Touch</h2>
      <p>Like my work and want something similar for your company? Sure, let's get to business!</p>
    </div>
    <form className="contactForm">
      <div className="firstLine">
        <TextField className="contactInput" id="outlined-ba name" type="text" label="Your Name" variant="outlined" />
        <TextField className="contactInput" id="outlined-ba email" type="email" label="E-mail" variant="outlined" />
      </div>

      <div class="contactSub">
        <TextField className="contactInput" id="outlined-ba subject" type="text" label="Subject" variant="outlined" />
        <TextField className="contactInput" 
          id="outlined-ba msg" 
          type="text" 
          label="Message" 
          multiline
          minRows={6} 
          variant="outlined" />
      </div>
      <button type='submit' className='sendMail'>Send Mail</button>
    </form>
  </div>;
}

export default Contact;

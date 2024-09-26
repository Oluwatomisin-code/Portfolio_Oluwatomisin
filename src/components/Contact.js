import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import './Contact.css';

function Contact() {

  const [name,setname]=useState('')
  const [email, setemail]= useState('')
  const [subject,setsubject]=useState('')
  const [message, setmessage] = useState('')
  const [buttonDisabler, setbuttonDisabler] = useState(false)

  //handle input field changes to update state
const handleChange = (e)=>{
  
  e.preventDefault();
  e.target.id.includes('name')? setname(e.target.value):
    (e.target.id.includes('email'))? setemail(e.target.value):
      (e.target.id.includes('subject'))? setsubject(e.target.value):
        setmessage(e.target.value)


}

//post mail data to mailService in the backend
const postMail =(e)=>{
  e.preventDefault();
  e.target.value = 'Sending...';
  let DataToSend = {
    'name': name,
    'email': email,
    'subject': subject,
    'message': message
  }


  try{
    setbuttonDisabler(true)
    axios.post("http://localhost:4400/sendmail",DataToSend,{ 'Content-Type': 'application/json' }).then(res=>{
      console.log("successful");
      setbuttonDisabler(false)
    })
  }catch(err){
    console.log(err)
    setbuttonDisabler(false)
  }
}




  return <div className='wrapContact' id="contact">
    <div>
      <h2>Get in Touch</h2>
      <p>Like my work and want something similar for your company? Sure, let's get to business!</p>
    </div>
    <form className="contactForm">
      <div className="firstLine">
        <TextField className="contactInput" id="outlined-ba name" type="text" label="Your Name" variant="outlined" onChange={handleChange} required/>
        <TextField className="contactInput" id="outlined-ba email" type="email" label="E-mail" variant="outlined" onChange={handleChange} required/>
      </div>

      <div class="contactSub">
        <TextField className="contactInput" id="outlined-ba subject" type="text" label="Subject" variant="outlined" onChange={handleChange}/>
        <TextField className="contactInput" 
          id="outlined-ba message" 
          type="text" 
          label="Message" 
          multiline
          minRows={6} 
          variant="outlined" 
          onChange={handleChange}
          required/>
      </div>
      <button type='submit' className='sendMail' onClick ={postMail} disabled={buttonDisabler}>Send Mail</button>
    </form>
  </div>;
}

export default Contact;

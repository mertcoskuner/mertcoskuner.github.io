import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const getColors = (mode: string) =>
  mode === 'dark'
    ? {
        cardBg: 'rgba(255,255,255,0.02)',
        title: 'white',
        desc: '#e0e0e0',
        inputBg: '#23262F',
        inputBorder: '#333',
        inputText: '#fff',
        buttonBg: '#5000ca',
        buttonText: '#fff',
      }
    : {
        cardBg: 'rgba(0,0,0,0.04)',
        title: '#0d1116',
        desc: '#222',
        inputBg: '#fff',
        inputBorder: '#ccc',
        inputText: '#222',
        buttonBg: '#5000ca',
        buttonText: '#fff',
      };

function Contact({ mode = 'dark' }: { mode?: string }) {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  const colors = getColors(mode);

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper" style={{background: colors.cardBg, borderRadius: 18, padding: '2.5rem 2rem'}}>
          <h1 style={{color: colors.title}}>Contact Me</h1>
          <p style={{color: colors.desc}}>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                InputProps={{
                  style: {
                    background: colors.inputBg,
                    color: colors.inputText,
                    borderRadius: 10,
                    border: `1px solid ${colors.inputBorder}`,
                  },
                }}
                InputLabelProps={{ style: { color: colors.desc } }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                InputProps={{
                  style: {
                    background: colors.inputBg,
                    color: colors.inputText,
                    borderRadius: 10,
                    border: `1px solid ${colors.inputBorder}`,
                  },
                }}
                InputLabelProps={{ style: { color: colors.desc } }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              InputProps={{
                style: {
                  background: colors.inputBg,
                  color: colors.inputText,
                  borderRadius: 10,
                  border: `1px solid ${colors.inputBorder}`,
                },
              }}
              InputLabelProps={{ style: { color: colors.desc } }}
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              onClick={sendEmail}
              style={{
                background: colors.buttonBg,
                color: colors.buttonText,
                borderRadius: 10,
                marginTop: 16,
                fontWeight: 600,
                fontSize: '1.1em',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)'
              }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
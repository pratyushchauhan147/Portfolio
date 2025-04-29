
import dotenv from 'dotenv';
import emailjs from '@emailjs/browser';
dotenv.config(); 

export const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.log(error.text);
        }
      );
  };






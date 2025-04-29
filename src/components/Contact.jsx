import React, { useRef,useEffect,useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { spring } from 'motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const sendEmail = (e) => {
    const templateParams = {
      name: name,
      email: email,
      message: `You got a mail from: ${email} \n ${message}`,
    };

    emailjs
      .send('service_49w4u0s', 'template_encblah', templateParams, '0-v8sViCfGBSjGOfH')
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
  const Ref2 = useRef(null);
  const { scrollYProgress } = useScroll({ target: Ref2 });

  const blob = useTransform(scrollYProgress, [0, 1], ['100vw', '0vw']);
  const bg2 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8],
    ['#000000', '#0C5987', '#34b8fa', '#EBEBEB', '#E0B684']
  );

  return (
    <section
      ref={Ref2}
      className="relative w-full px-6 py-20 bg-black text-white "
    >
      {/* Contact Form */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-10">
          Got a question? Let's talk.
        </p>

        <div className="space-y-6">
          <input
            type="text"
            onChange={(e)=>{setname(e.target.value)}}
            placeholder="Your Name"
            className="backdrop-blur-3xl w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            onChange={(e)=>{setemail(e.target.value)}}
            className="backdrop-blur-3xl w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            onChange={(e)=>{setmessage(e.target.value)}}
            className="backdrop-blur-3xl w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            onClick={(e)=>{
              sendEmail(e)
            }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-purple-300 transition-all"
          >
            Send Message
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/pratyushchauhan147"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pratyush-chauhan-5245b722b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pratyushchauhan147contact@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Blobby Backgrounds */}
      <div>
        {[
          ['2%', '30%', 'purple-500'],
          ['60%', '50%', 'pink-500'],
          ['34%', '20%', 'yellow-500'],
          ['67%', '17%', 'blue-500'],
          ['40%', '80%', 'orange-500'],
          ['44%', '10%', 'green-500'],
          ['10%', '72%', 'red-500'],
          ['88%', '67%', 'cyan-500'],
          ['30%', '47%', 'yellow-300'],
          ['50%', '70%', 'purple-700'],
        ].map(([top, left, color], i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: spring,
              damping: 2,
              mass: 0.6,
              stiffness: 100,
              duration: 1,
            }}
            className={`z-0 absolute top-[${top}] left-[${left}] w-[10vw] h-[10vw] bg-${color} rounded-full mix-blend-difference blur-xl opacity-50 animate-pulse`}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;

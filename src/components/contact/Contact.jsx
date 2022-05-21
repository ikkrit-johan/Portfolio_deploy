import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaDiscord} from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ot1tj6f', 'template_m61ga0j', form.current, 'Gn4-aOopUiOX3Pnht');

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Contacter moi</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>johan.car@protonmail.com</h5>
            <a href="mailto:Mail@mail.fr" target="_blank" rel="noreferrer">Envoyer un message</a>
          </article>

          <article className='contact__option'>
            <FaDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>Ikkrit</h5>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">Cliquer ici</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Johan Carrion</h5>
            <a href="https://fr.linkedin.com/in/johan-carrion-7a9832236?trk=people-guest_people_search-card" target="_blank" rel="noreferrer">Cliquer ici</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom' required/>
          <input type="email" name='email' placeholder='Votre Mail' required/>
          <textarea name="message" id="" rows="7" placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
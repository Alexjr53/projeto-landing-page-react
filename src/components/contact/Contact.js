import './Contact.css'
import ContactModal from '../contactModal/ContactModal';
import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  const validateForm = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    let formIsValid = true;

    if (!name) {
      setIsNameValid(false);
      formIsValid = false
    } else {
      setIsNameValid(true);
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
      formIsValid = false
    } else {
      setIsEmailValid(true);
    }

    if (!message) {
      setIsMessageValid(false);
      formIsValid = false
    } else {
      setIsMessageValid(true);
    }

    return formIsValid
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      setIsModalOpen(true);
      resetInputs();
    }
  };

  const resetInputs = () => {
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <section className="contactSection">
      <div className='container'>
        <div className='contactBox'>
          <h2>Entre em contato!</h2>
          <p>Gostaria de saber mais sobre nossos serviços? Preencha o formulário e nossa equipe entrará em contato com você em breve.</p>
          <div className='contactOptions'>
            <div className='contact'>
              <i className="far fa-envelope"></i>
              <p>email@gmail.com</p>
            </div>
            <div className='contact'>
              <i className="fas fa-phone"></i>
              <p>(11) 99711-5309</p>
            </div>
            <div className='contact'>
              <i className="fas fa-map-marker"></i>
              <p>location 33, rua aletoria. estado pais 08986454</p>
            </div>
          </div>
        </div>
        <div className='formContainer'>
          <form on onSubmit={handleFormSubmit} className="form">
            <input ref={nameRef} className='input' type="text" placeholder="Nome*"></input>
            {!isNameValid && <p className='error'>Por favor, preencha o campo de Nome.</p>}
            <input ref={emailRef} className='input' type="email" placeholder="E-mail*"></input>
            {!isEmailValid && <p className='error'>Por favor digite um E-mail válido</p>}
            <textarea ref={messageRef} placeholder="Mensagem*"></textarea>
            {!isMessageValid && <p className='error'>Por favor, preencha o campo de MENSAGEM.</p>}
            <input type='submit' className='button' value='enviar'></input>
          </form>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <ContactModal closeModal={closeModal}/>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
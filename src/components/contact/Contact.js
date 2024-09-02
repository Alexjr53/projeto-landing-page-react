import './Contact.css'
import { useRef, useState } from 'react';

function Contact() {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);


  const handleFormSubmit = ()=>{
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    
    let formIsValid = true;

    if (!name) {
      setIsNameValid(false);
      formIsValid = false
      
    }else{
      setIsNameValid(true);
    }

    if (!email || !email.includes('@') || !email.endsWith('.com')) {
      setIsEmailValid(false);
      formIsValid = false
      
    }else{
      setIsEmailValid(true);
    }

    if (!message) {
      setIsMessageValid(false);
      formIsValid = false
    }else{
      setIsMessageValid(true);
    }

    if (formIsValid) {
      alert('Mensagem enviada com sucesso!')
      resetInputs()    
    }
  }

  const resetInputs = ()=>{
    nameRef.current.value = ''
    emailRef.current.value = ''
    messageRef.current.value = ''
  }
  
  return (
    <section className="contactSection">
      <div className='container'>
        <div className='contactBox'>
          <h2>Entre em contato!</h2>
          <p>Gostaria de saber mais sobre nossos serviços? Preencha o formulário e nossa equipe entrará em contato com você em breve.</p>
          <div className='contactOptions'>
            <div className='contact'>
              <i class="far fa-envelope"></i>
              <p>email@gmail.com</p>
            </div>
            <div className='contact'>
              <i class="fas fa-phone"></i>
              <p>(11) 99711-5309</p>
            </div>
            <div className='contact'>
              <i class="fas fa-map-marker"></i>
              <p>location 33, rua aletoria. estado pais 08986454</p>
            </div>
          </div>
        </div>
        <div className='formContainer'>
          <form class="form">
            <input ref={nameRef} className='input' type="text" placeholder="Nome*"></input>
            {!isNameValid && <p className='error'>Por favor, preencha o campo de Nome.</p>}
            <input ref={emailRef} className='input' type="email" placeholder="E-mail*"></input>
            {!isEmailValid && <p className='error'>Por favor digite um E-mail válido</p>}
            <textarea ref={messageRef} placeholder="Mensagem*"></textarea>
            {!isMessageValid && <p className='error'>Por favor, preencha o campo de MENSAGEM.</p>}
            <input onClick={handleFormSubmit} type='button' className='button' value='enviar'></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
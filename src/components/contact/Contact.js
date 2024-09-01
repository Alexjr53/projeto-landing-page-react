import './Contact.css'

function Contact() {
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
            <input className='input' type="text" placeholder="Nome*"></input>
            <input className='input' type="email" placeholder="E-mail*"></input>
            <textarea placeholder="Mensagem*"></textarea>
            <input type='button' className='button' value='enviar'></input>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
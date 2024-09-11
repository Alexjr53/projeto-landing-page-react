import { motion } from 'framer-motion';
import './ContactModal.css'

function ContactModal({closeModal}) {
    return (
        <motion.div  initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.2}}>
            <div className="modal">
                <div className="modalContent">
                    <h2>Mensagem Enviada!</h2>
                    <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                </div>
                <button className="closeButton" onClick={closeModal}>X</button>
            </div>
            <div id="overlay" onClick={closeModal} class="overlay"></div>
        </motion.div>
    )
}

export default ContactModal
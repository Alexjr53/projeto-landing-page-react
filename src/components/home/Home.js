import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
      <main className="main">
        <div className='layer'></div>
        <header className='header'>
          <div className='logo'>
            <h1>logoMarca</h1>
          </div>
          <nav className='navBar'>
            <ul className='navMenu'>
              <li><Link to="/about">Sobre</Link></li>
              <li><Link to="/product">Produtos</Link></li>
              <li><Link to="/contact">Contato</Link></li>
            </ul>
          </nav>
        </header>
          <div className='mainContent'>
            <h2>Bem vindo(a) ao nosso <span>website!</span></h2>
            <p>Na <span>[Nome da Empresa]</span>, nos dedicamos a oferecer soluções inovadoras que atendem às suas necessidades. Com uma equipe de especialistas apaixonados pelo que fazem, nosso objetivo é transformar suas ideias em realidade, garantindo qualidade e eficiência em cada projeto.</p>
            <p>Nosso compromisso é com a excelência e a satisfação do cliente. Trabalhamos em estreita colaboração com nossos parceiros para entender suas demandas e entregar resultados que superem suas expectativas. Explore nosso site para conhecer mais sobre nossos serviços e equipe.</p>
            <Link to="/about" className="btnLink">Sobre</Link>
          </div>
      </main>
    );
  }
  
  export default Home;
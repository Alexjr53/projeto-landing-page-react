import BackHomeButton from '../button/BackHomeButton';
import './About.css'
import Team from '../team/Team'

function About() {
  return (
    <section className="aboutSection">
      <BackHomeButton />
      <div className='aboutContent'>
        <h2 className='aboutTitle'>Sobre nossa <span>empresa</span></h2>
        <p className='aboutText'>Fundada em [Ano], nossa empresa começou com o objetivo de [Objetivo Inicial]. Ao longo dos anos, conquistamos vários marcos importantes, incluindo [Marcos Importantes].</p>
        <p className='aboutText'>Somos uma empresa dedicada a oferecer soluções inovadoras e de alta qualidade em [Área de Atuação]. Com anos de experiência no setor, nosso objetivo é superar as expectativas dos nossos clientes através de produtos e serviços excepcionais. Nossa equipe é composta por profissionais apaixonados e altamente qualificados, comprometidos em entregar resultados que impulsionem o sucesso dos nossos clientes e contribuam para o crescimento contínuo da nossa empresa. Acreditamos na importância de construir relações duradouras e na inovação constante para atender às necessidades em evolução do mercado.</p>
        <div className='valuesContainer'>
          <h3>Missão</h3>
          <p>Nossa missão é [Missão], proporcionando [Serviços/Produtos] que [Objetivo].</p>

          <h3>Visão</h3>
          <p>Nosso objetivo é [Visão], criando um futuro onde [Impacto Esperado].</p>

          <h3>Valores</h3>
          <ul>
            <li><span>Inovação:</span> Sempre buscamos novas maneiras de [Atividade].</li>
            <li><span>Integridade:</span> Atuamos com transparência e honestidade.</li>
            <li><span>Excelência:</span> Comprometidos com a qualidade em tudo que fazemos.</li>
            <li><span>Responsabilidade Social:</span> Envolvemos-nos em [Atividades Sociais/Projetos].</li>
          </ul>
        </div>
      </div>
      <Team />
    </section>
  );
}

export default About;
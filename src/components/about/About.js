import './About.css'
import TeamCard from '../teamCard/TeamCard';
import avatar1 from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/avatar-2.png';
import avatar3 from '../../assets/images/avatar-3.png';
import avatar4 from '../../assets/images/avatar-4.png';

function About() {
  return (
    <section className="aboutSection">
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
      <section className="teamSection">
        <h2 className='title'><div className="borderEffect"></div>Conheça nosso time!</h2>
        <div className="teamContainer">
          <TeamCard 
            name="Alexsandro Rosa Junior"
            position="CEO / Instrutor"
            description="Nossa abordagem é centrada no cliente. Trabalhamos em estreita colaboração para garantir que cada solução desenvolvida esteja alinhada com os objetivos de negócio e gere valor real."
            imageUrl={avatar1}
          />
          <TeamCard 
            name="Maria Silva"
            position="Diretora de Operações"
            description="Maria é a responsável por supervisionar as operações diárias da empresa. Com um foco rigoroso na eficiência e qualidade, ela garante que todos os projetos sejam entregues dentro do prazo e excedam as expectativas dos clientes."
            imageUrl={avatar2}
          />
          <TeamCard 
            name="João Pereira"
            position="Designer UX/UI"
            description="Especialista em criar interfaces que garantem uma experiência fluida e eficiente para o usuário. Trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis."
            imageUrl={avatar3}
          />
          <TeamCard 
            name="Carla Oliveira"
            position="Coordenadora de Marketing"
            description="Carla lidera as iniciativas de marketing da empresa, criando estratégias que fortalecem a marca e aumentam a visibilidade no mercado. Sua abordagem inovadora garante que nossas campanhas sejam sempre eficazes e impactantes."
            imageUrl={avatar4}
          />
        </div>
      </section>
    </section>
  );
}

export default About;
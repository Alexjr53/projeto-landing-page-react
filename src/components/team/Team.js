import './Team.css';
 

const teamMembers = [
  {
    name: 'Alexsandro rosa junior',
    role: 'CEO / Instrutor',
    description: 'Nossa abordagem é centrada no cliente. Trabalhamos em estreita colaboração para garantir que cada solução desenvolvida esteja alinhada com os objetivos de negócio e gere valor real.',
    imageUrl: '/src'
  },
  {
    name: 'Maria Silva',
    role: 'Gerente de Projetos',
    description: 'Maria é responsável por garantir que cada etapa do desenvolvimento seja concluída dentro dos prazos e com a qualidade esperada, sempre focando nas necessidades do cliente.',
    imageUrl: 'path/to/avatar2.jpg'
  },
  {
    name: 'João Pereira',
    role: 'Designer UX/UI',
    description: 'Especialista em criar interfaces que garantem uma experiência fluida e eficiente para o usuário. trabalha em conjunto com a equipe de desenvolvimento para transformar ideias em produtos digitais incríveis.',
    imageUrl: 'path/to/avatar2.jpg'
  },
  {
    name: 'Carla oliveira',
    role: 'Assistente',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit',
    imageUrl: 'path/to/avatar2.jpg'
  },

];

function Team() {
  return (
    <section className="teamSection">
      <h2 className='title'><div className="borderEffect"></div>Conheça nosso time!</h2>

      <div className="teamContainer">
        
        {teamMembers.map((member, index) => (

          <div key={index} className="teamMember">
            
            <div className="topBoxUser">
              <div className="boxAvatar">
                <img src={member.imageUrl} alt={member.name} />
              </div>

              <div className="infoUser">
                <p className='memberName'>{member.name}</p>
                <p className='memberDescription' >{member.role}</p>
              </div>
            </div>

            <div className="descriptionUserBox">
              <p>{member.description}</p>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Team;
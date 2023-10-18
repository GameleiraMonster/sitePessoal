import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'

const SideBar = () => {
  return ( 
  <aside id="sidebar">
    <img src={Avatar} alt="Jânio Gameleira" />
    <p className="title">Desenvolvedor</p>
    <p>redes sociais</p>
    <p>Informações de contato</p>
    <a href="" className="btn">
      Download Curriculo
    </a>
  </aside>
  )
}

export default SideBar
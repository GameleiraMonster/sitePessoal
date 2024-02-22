import SocialNetwork from './SocialNetwork'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpeg'
import '../styles/components/sidebar.sass'



const SideBar = () => {
  return ( 
  <aside id="sidebar">
    <img src={Avatar} alt="Jânio Gameleira" />
    <p className="title">Desenvolvedor</p>
    <SocialNetwork />
    <InformationContainer />
    <a href="" className="btn">
      Download Curriculo
    </a>
  </aside>
  )
}

export default SideBar
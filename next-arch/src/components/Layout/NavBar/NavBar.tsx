import Image from 'next/image'
import buscar from '@/imgs/icons/buscar.png'

const NavBar = () => {
  return <header>
    <div className="LogoContainer">
      <h2 className="Logo"><a href="#" className="contenedor">WKMCinemas</a></h2>


      <div className="buscar">
        <Image alt="" src={buscar} width="25" height="25" />
        <input type="text" placeholder="Buscar peliculas"></input>
      </div>
    </div>

    <div className="NAVContainer">
      <nav>
        <a href="/" className="activo" id="index"><strong>Inicio</strong></a>
        <a href="/movies" className="" id="Cartelera"><strong>Cartelera</strong></a>
        <div className="dropdown">
          <a href="/" className="" id="Generos"><strong>Generos</strong></a>
          <div className="dropdown-content">
            <a href="/" className="">Romance</a><br />
            <a href="/" className=""><strong>Accion</strong></a><br />
            <a href="/" className="">Sci-Fi</a><br />
            <a href="/" className="">Terror</a><br />
          </div>
        </div>
        <a href="/estrenos" className="" id="Estrenos"><strong>Estrenos</strong></a>
        <a href="/" className="" id="Proximamente"><strong>Proximamente</strong></a>
        <a href="/" className="" id="Combos"><strong>Combos</strong></a>
      </nav>
    </div>
  </header>
}
export default NavBar;
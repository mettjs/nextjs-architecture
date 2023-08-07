export default function Home() {
  return <div className="destacada">
    <div className="contenedor">
      <h2>Pelicula destacada de hoy</h2>
      <h3 className="titulo">Interestellar</h3>
      <p className="descripcion">
        Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente
        descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias
        que tiene un viaje interestelar.
      </p>
      <p className="descripcion">
        Michael Ramirez - `Interstellar es una gran pelicula 10/10`
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/UoSSbmD9vqc" title="YouTube video player"
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <button className="btnTicket">Comprar Tickets</button>
    </div>
  </div>
};
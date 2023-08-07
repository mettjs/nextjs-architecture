import movieService from "@/services/peliculas/peliculas.service";
import Peliculas from "@/models/Peliculas.model";
import { useEffect, useState } from "react";
import useQueryParams from "@/hooks/useQueryParams";



const Cartelera = () => {

  const [response, setResponse] = useState({} as Peliculas)
  useEffect(() => {
    // You can await here
    const result = await movieService.getAll();
    if (result != undefined) {
      setResponse(result);
    }
  }, [response]);


  return (<>
    <div className="seleccionFecha">
      <p><strong>PIANTINI</strong></p>
      <p><strong>24 de junio</strong></p>
      <select title="fechas" name="fechas" id="">
        <option value="">23/7/2023</option>
        <option value="">27/7/2023</option>
        <option value="">31/7/2023</option>
      </select>
    </div>
    <div className="contenedor-cartelera">
      <div className="carteleras">
        <div className="cartelera">
          <div className="resumen-pelicula">
            <div className="movie-container">
              <div className="pelicula">
                <img src="/src/imgs/peliculas/avatar.jpg" alt="" height="300" width="250"></img>
              </div>

              <div className="detallesPeliculas">
                <div className="informacion-pelicula">
                  <h2>{response.Titulo}</h2>
                  <p>Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer
                    juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora
                    cuando una antigua amenaza reaparece.</p>

                </div>

                <div className="contenedor-informacion">
                  <div className="informacion">
                    <h3>Genero</h3>
                    <p>Accion</p>
                  </div>

                  <div className="informacion">
                    <h3>Fecha de lanzamiento</h3>
                    <p>24/04/2023</p>
                  </div>

                  <div className="informacion">
                    <h3>Sucursal</h3>
                    <p>Piantini</p>
                  </div>
                </div>
              </div>

              <div className="contenedor-horas">
                <h3>Horarios:</h3>
                <div className="horarios">
                  <div className="horas">
                    <a href="">
                      <p><strong>7:00 AM</strong></p>
                    </a>
                  </div>
                  <div className="horas">
                    <a href="">
                      <p><strong>9:00 AM</strong></p>
                    </a>
                  </div>
                  <div className="horas">
                    <a href="">
                      <p><strong>11:00 AM</strong></p>
                    </a>
                  </div>

                </div>
                <div className="precio">
                  <h2>PRECIO</h2>
                </div>
                <div className="obtenerTaquilla">
                  <button className="comprarTaquilla">
                    <h2>Obtener Taquilla</h2>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="cartelera">
          <div className="resumen-pelicula">
            <div className="movie-container">
              <div className="pelicula">
                <img src="/src/imgs/peliculas/ElDespertar.jpg" alt="" height="300" width="250"></img>
              </div>

              <div className="detallesPeliculas">
                <div className="informacion-pelicula">
                  <h2>EL DESPERTAR</h2>
                  <p>Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer
                    juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora
                    cuando una antigua amenaza reaparece.</p>

                </div>

                <div className="contenedor-informacion">
                  <div className="informacion">
                    <h3>Genero</h3>
                    <p>TERROR</p>
                  </div>

                  <div className="informacion">
                    <h3>Fecha de lanzamiento</h3>
                    <p>24/04/2023</p>
                  </div>

                  <div className="informacion">
                    <h3>Sucursal</h3>
                    <p>SAMBIL</p>
                  </div>
                </div>
              </div>

              <div className="contenedor-horas">
                <h3>Horarios:</h3>
                <div className="horarios">
                  <div className="horas">
                    <a href="">
                      <p><strong>7:00 AM</strong></p>
                    </a>
                  </div>
                  <div className="horas">
                    <a href="">
                      <p><strong>9:00 AM</strong></p>
                    </a>
                  </div>
                  <div className="horas">
                    <a href="">
                      <p><strong>11:00 AM</strong></p>
                    </a>
                  </div>

                </div>
                <div className="precio">
                  <h2>PRECIO</h2>
                </div>
                <div className="obtenerTaquilla">
                  <button className="comprarTaquilla">
                    <h2>Obtener Taquilla</h2>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Cartelera;
import ohhhh from "../assets/img/ohhhh.avif";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container text-center mt-5">
      <h1 className="text-info">Hola!!!!!</h1>

      {/* Contenedor para la imagen y el texto */}
      <div className="d-flex align-items-center justify-content-center">
        {/* Imagen */}
        <img
          src={ohhhh}
          alt="Rigo Baby"
          className="hombre img-fluid rounded me-3 shadow p-3 mb-5 bg-body-tertiary rounded"
          style={{ maxWidth: "600px" }} // Ajusta el tamaño de la imagen
        />

        {/* Texto */}
        <p className="lead">
		Trabajar con Flexbox en Bootstrap es una excelente manera de crear diseños responsivos y alinear elementos de manera eficiente. Pero para nadie es secreto que el ajustar tus elementos en la pagina es un <i className="text-danger">""quebradero de cabeza""</i>....
		 En el menu encontrarás muchas soluciones.
        </p>
		
      </div>
    </div>
  );
};
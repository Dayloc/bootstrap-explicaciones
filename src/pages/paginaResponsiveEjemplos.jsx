import React from 'react';

// Componente BreakpointsTable
const BreakpointsTable = ({ breakpoints }) => (
  <table className="table table-bordered">
    <thead className="table-light">
      <tr>
        <th>Breakpoint</th>
        <th>Clase</th>
        <th>Ancho</th>
      </tr>
    </thead>
    <tbody>
      {breakpoints.map((bp, index) => (
        <tr key={index}>
          <td>{bp.name}</td>
          <td><code>{bp.class}</code></td>
          <td>{bp.width}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// Componente GridExample
const GridExample = () => (
  <>
    <div className="row mb-3">
      {[1, 2, 3].map(n => (
        <div className="col-md-4" key={`col1-${n}`}>
          <div className="responsive-box">.col-md-4</div>
        </div>
      ))}
    </div>
    
    <div className="row mb-3">
      {[1, 2, 3, 4].map(n => (
        <div className="col-sm-6 col-lg-3" key={`col2-${n}`}>
          <div className="responsive-box">.col-sm-6 .col-lg-3</div>
        </div>
      ))}
    </div>
  </>
);

// Componente CodeBlock mejorado
const CodeBlock = ({ children }) => (
  <div className="code-container">
    <pre><code>{children}</code></pre>
  </div>
);

// Componente Navbar
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <div className="container">
      <a className="navbar-brand" href="#">Diseño Responsive</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="#intro">Introducción</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#grid">Sistema Grid</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#components">Componentes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// Componente Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Diseño Responsive con React</h5>
          <p>Ejemplos y código para crear sitios web que se adaptan a todos los dispositivos.</p>
        </div>
        <div className="col-md-3">
          <h5>Recursos</h5>
          <ul className="list-unstyled">
            <li><a href="https://getbootstrap.com" className="text-dark">Documentación Bootstrap</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html" className="text-dark">Documentación React</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Ejemplos</h5>
          <ul className="list-unstyled">
            <li><a href="#grid" className="text-dark">Grid Responsive</a></li>
            <li><a href="#components" className="text-dark">Componentes</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// Componente ResponsiveImage
// Componente ResponsiveImage corregido
const ResponsiveImage = () => (
    <div className="dragonBall mb-4 text-center">
      <div className="responsive-image-container">
        <img 
          src="https://th.bing.com/th/id/OIP.-1zyzIMDHKcU_-sXth6ZiQHaFP?w=249&h=180&c=7&r=0&o=5&pid=1.7" 
          className="responsive-image "
          alt="Ejemplo responsive con media queries"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400"%3E%3Crect fill="%23dddddd" width="1200" height="400"/%3E%3Ctext fill="%23666666" font-family="sans-serif" font-size="24" dy=".5em" text-anchor="middle" x="600" y="200"%3EEjemplo responsive%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>
    </div>
  );

// Componente principal
function PaginaResponsiveEjemplos() {
  const breakpoints = [
    { name: 'Extra pequeño', class: '.col-', width: '<576px' },
    { name: 'Pequeño', class: '.col-sm-', width: '≥576px' },
    { name: 'Mediano', class: '.col-md-', width: '≥768px' },
    { name: 'Grande', class: '.col-lg-', width: '≥992px' },
    { name: 'Extra grande', class: '.col-xl-', width: '≥1200px' }
  ];

  return (
    <div className="wrapper">
      <div className="content">
        <Navbar />
        
        <div className="container">
          {/* Sección Introducción */}
          <section id="intro" className="mb-5">
            <h1 className="display-4 mb-4">Diseño Responsive con React</h1>
            <p className="lead">Aprende a crear diseños que se adaptan a todos los dispositivos.</p>
            
            <div className="example-container mt-4 hombre">
              <h3>¿Qué es el diseño responsive?</h3>
              <p>El diseño responsive permite que tu sitio web se adapte automáticamente al tamaño de la pantalla del dispositivo (móvil, tablet, escritorio).</p>
              
              <div className="example-box">
                <h4>Viewport Meta Tag</h4>
                <p>Esencial para el responsive design, asegura que el ancho de la página se ajuste al dispositivo:</p>
                <CodeBlock>{`<meta name="viewport" content="width=device-width, initial-scale=1">`}</CodeBlock>
              </div>
            </div>
          </section>

          {/* Sección Grid */}
          <section id="grid" className="mb-5">
            <h2 className="mb-4">Sistema Grid de Bootstrap</h2>
            <p>Bootstrap usa un sistema de 12 columnas con 5 breakpoints para crear layouts responsive.</p>
            
            <div className="example-container">
              <h3>Breakpoints</h3>
              <BreakpointsTable breakpoints={breakpoints} />
              
              <h3 className="mt-4">Ejemplo de Grid</h3>
              <div className="example-box">
                <GridExample />
                <CodeBlock>{`<div className="row">
  <div className="col-md-4">Columna 1</div>
  <div className="col-md-4">Columna 2</div>
  <div className="col-md-4">Columna 3</div>
</div>

<div className="row">
  <div className="col-sm-6 col-lg-3">Columna A</div>
  <div className="col-sm-6 col-lg-3">Columna B</div>
  <div className="col-sm-6 col-lg-3">Columna C</div>
  <div className="col-sm-6 col-lg-3">Columna D</div>
</div>`}</CodeBlock>
              </div>
            </div>
          </section>

          {/* Sección Componentes */}
          <section id="components" className="mb-5">
            <h2 className="mb-4">Componentes Responsive</h2>
            
            <div className="example-container">
              <h3>Navbar Responsive</h3>
              <p>El navbar de Bootstrap se colapsa automáticamente en dispositivos móviles.</p>
              <div className="example-box">
                <CodeBlock>{`<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`}</CodeBlock>
              </div>
            </div>
            
            <div className="example-container mt-4">
              <h3>Imágenes Responsive</h3>
              <p>Bootstrap proporciona clases para hacer que las imágenes sean responsive.</p>
              <div className="example-box">
                <ResponsiveImage />
                <CodeBlock>{`<img src="imagen.jpg" className="img-fluid" alt="...">`}</CodeBlock>
              </div>
            </div>
            
            <div className="example-container mt-4">
              <h3>Utilidades Responsive</h3>
              <p>Bootstrap incluye utilidades para mostrar/ocultar elementos según el breakpoint.</p>
              <div className="example-box">
                <div className="d-block d-md-none bg-warning p-2 mb-2">Visible solo en móviles</div>
                <div className="d-none d-md-block d-lg-none bg-info p-2 mb-2">Visible solo en tablets</div>
                <div className="d-none d-lg-block bg-success p-2">Visible solo en escritorio</div>
                
                <CodeBlock>{`<div className="d-block d-md-none">Visible solo en móviles</div>
<div className="d-none d-md-block d-lg-none">Visible solo en tablets</div>
<div className="d-none d-lg-block">Visible solo en escritorio</div>`}</CodeBlock>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PaginaResponsiveEjemplos;
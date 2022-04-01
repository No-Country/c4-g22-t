import sillon from "../../imgs/sillon.png";

function TrendingProduct() {
  //   const supportServices = contenidoSupport();
  return (
    <div key="sillon-zone" className="lista-producto-all">
      <div>
        <div className="contenedor-imagenes-sofa">
          <img src={sillon} />
        </div>
      </div>
      <div>
        <div className="lista">
          <h2 className="lista-titulo">
            Unique Features Of leatest & Trending Poducts
          </h2>
        </div>
        <div className="lista">
          <div className="puntote"></div>
          <p className="lista-texto">
            All frames constructed with hardwood solids and laminates
          </p>
        </div>

        <div className="lista">
          <div className="puntote"></div>
          <p className="lista-texto">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </p>
        </div>

        <div className="lista">
          <div className="puntote"></div>
          <p className="lista-texto">
            Arms, backs and seats are structurally reinforced
          </p>
        </div>

        <div className="lista-descripcion-carrito">
          <div>
            <button className="lista-boton-agregar-al-carrito">
              Add To Cart
            </button>
          </div>
          <div className="lista-contenedor-texto-agregar-al-carrito">
            <h5>B&B Italian Sofa</h5>
            <h5 className="lista-contenedor-texto-precio">$32</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrendingProduct;

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-5 row align-items">
              <h1 className="container text-center pt-5">PoOL</h1>
              <h1 className="container text-center pt-1">Proof of ownership and learning</h1>
              <h3 className="text-center pt-3">Valida los registros de tus logros de tus estuiantes y trabajadores.</h3>
              <br></br>
              <h3 className="text-center pb-5">
                Con nosotros lo haces posible la validación de los mismos a través de la blockchain
              </h3>
            </div>

            <div className="col-7 d-flex align-items-center">
              <div className="container text-center row justify-content-md-center">
                <img src="/joven_estudiando.png" className="imagen_1" alt="Imagen publicitaria de PoOL" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

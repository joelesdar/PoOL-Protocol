const Profile = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row h-17">
          <div className="col-12 text-center">
            <img src="cliente5.jpg" className="rounded-circle foto_perfil img-fluid mx-auto" alt="logo" height="30" />
          </div>
        </div>
      </div>
      <div className="container text-center pt-1 pb-3">
        <div className="row">
          <div className="col-12">
            <p className="p1">Cambia tu imagén</p>
          </div>
        </div>
      </div>

      <div className="container text-center pb-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="../Boostrap.png" className="card-img-top img_card img-fluid mx-auto " alt="..." />
              <div className="card-body">
                <h5 className="card-title">Bootstrap 5.0</h5>
                <p className="card-text">
                  Curso de Nivel I. En este curso se aprendió las bases de la libreria Bootstrap 5.0
                </p>
                <a href="#" className="btn btn-primary">
                  Más información
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../finanzas_personales.svg" className="card-img-top img_card img-fluid mx-auto" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gestión de Finanzas Personales</h5>
                <p className="card-text">Curso completo sobre cómo gestionar las finanzas personales.</p>
                <a href="#" className="btn btn-primary">
                  Más información
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../trabajo_equipo.svg" className="card-img-top img_card img-fluid mx-auto" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Reconocimiento</h5>
                <p className="card-text">Reconocimiento por la adquisición de habilidades de trabajo en equipo.</p>
                <a href="#" className="btn btn-primary">
                  Más información
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="../edicion_video.svg" className="card-img-top img_card img-fluid mx-auto" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Edición de Videos y Audios</h5>
                <p className="card-text">Curso de edición de videos y audios para marca personal</p>
                <a href="#" className="btn btn-primary">
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

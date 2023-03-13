import React from "react";

const Home = () => {
  return (
    <main>
      <section className="carrossel">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./imagem/Carrosseu.svg" className="d-block w-100 carrossel__imagem" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./imagem/Carrosseu.svg" className="d-block w-100 carrossel__imagem" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./imagem/Carrosseu.svg" className="d-block w-100 carrossel__imagem" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="container">
        <div className="container__opcoes">
          <div className="opcoes__link" alt="Lojas">
            <img src="./imagem/lojas.svg" className="link__imagem" />
          </div>
          <p className="opcoes__descricao">Lojas</p>
        </div>
        <div className="container__opcoes">
          <div className="opcoes__link" alt="Eventos">
            <img src="./imagem/eventos.svg" className="link__imagem" />
          </div>
          <p className="opcoes__descricao">Eventos</p>
        </div>
        <div className="container__opcoes">
          <div className="opcoes__link" alt="Trabalhe conosco">
            <img src="./imagem/trabalhe.svg" className="link__imagem" />
          </div>
          <p className="opcoes__descricao">Trabalhe conosco</p>
        </div>
      </section>
      <section className="lojas">
        <div className="loja__container">
          <div className="container__titulo">
            <img src="./imagem/lojas.svg" className="titulo__icone" alt="Lojas" />
            <h2 className="titulo__texto">Lojas</h2>
          </div>
          <a href="#" className="container__link" alt="Veja todas">
            <span className="link__titulo">Veja todas</span>
            <img src="./imagem/seta.svg" className="link__imagem" />
          </a>
        </div>
        <div className="lojas__carrossel">
          <div id="carouselExample" className="carousel slide carrossel__lojas">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./riomar-recife.jpg" className="d-block w-100 " id="lojas__imagem" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
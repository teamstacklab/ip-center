import React from 'react';
import { useParams } from 'react-router-dom';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../api';
import { ApiLojas } from '../../api/routes';

import "./CSS/mobile.css";
import "./CSS/desktop.css";

import {
  BagCheck,
  GeoAlt,
  Tag,
  InfoCircle,
  Whatsapp,
  Instagram
} from 'react-bootstrap-icons';


const Loja = ({ match }) => {
  const [loja, setLoja] = React.useState(null);
  const { id } = useParams();
  const route = `${ApiLojas.all}/${id}`;
  
  console.log(route)
  
  React.useEffect(() => {
    api.get(route).then((res) => {
      setLoja(res.data)
    })
  }, [route])
  
  console.log(loja)

  if (!loja) return null;

  return (
    <main className='content-box'>
      <section className="loja p-0 m-0">
        <div className="loja__sobre">
          <div className='sobre__header'>
            <h2 className="sobre__title">{loja.name}</h2>
          </div>
          <p className="sobre__slogan">{loja.slogan}</p>
          <div className='carousel__container'>
            <Swiper
              className="sobre__carousel"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation={true}
              pagination={{ clickable: true }}
            >
              {loja.images.map(imagem => {
                return (
                  <SwiperSlide className="carousel__item">
                    <img className="carousel__image" src={imagem} alt="Arte do Shopping" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <h3 className="sobre__description-title">Descrição:</h3>
          <p className="sobre__description">{loja.description}</p>
        </div>
        <div className="loja__data">
          <img className='data__logo' src={loja.logo} alt="logotipo da loja" />
          <h2 className="data__title">{loja.name}</h2>
          <p className='data__slogan'>{loja.slogan}</p>
          <div className='data__item data__services'>
            <h3 className='data__item-title services__title'><BagCheck className='data__icon' />Produtos e/ou serviços</h3>
            <ul className='data__list'>
              <li>{loja.services}</li>
            </ul>
          </div>
          <div className='data__item data__location'>
            <h3 className='data__item-title  location__title'><GeoAlt className='data__icon' />Localização:</h3>
            <ul className='data__list'>
              <li>{loja.location}</li>
            </ul>
          </div>
          <div className='data__item data__category'>
            <h3 className='data__item-title category__title'><Tag className='data__icon' />Categoria:</h3>
            <ul className='data__list'>
              <li>{loja.category}</li>
            </ul>
          </div>
          <div className='data__item data__additional'>
            <h3 className='data__item-title category__title'><InfoCircle className='data__icon' />Informações adicionais:</h3>
            <ul className='data__list'>
              <li>{loja.additionalInfo}</li>
            </ul>
          </div>
          <div className='data__actions'>
            <a className='data__action whatsapp' href={`https://api.whatsapp.com/send/?phone=%2B55${loja.whatsapp}&text&type=phone_number&app_absent=0`}>
              <Whatsapp className='action__icon' />
            </a>
            <a className='data__action instagram' href={`https://www.instagram.com/${loja.instagram}`}>
              <Instagram className='action__icon' />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


export default Loja;
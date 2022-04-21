import React, { useState } from 'react';

import sprite from '../images/sprite.svg';

const App = () => {
  return (
    <>
      <div className="sidebar">Sidebar</div>
      <header className="header">Header</header>
      <main className="realtors">Top 3 realtors</main>
      <section className="features">
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-global'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">
            World's best luxury homes
          </h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-trophy'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="feature__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-map-pin'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations
          </h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-key'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">New home in one week</h4>
          <p className="feature__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-presentation'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <svg className="feature__icon">
            <use href={sprite + '#icon-lock'} />
          </svg>
          <h4 className="heading-4 heading-4--dark">
            Secure payments on Nexter
          </h4>
          <p className="feature__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>
      <div className="story__pictures">Story Pictures</div>
      <div className="story__content">Story Content</div>
      <section className="homes">
        <div className="home">
          <img
            src={require('../images/house-1.jpeg')}
            alt="House 1"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Beautiful Family House</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 1 */}
        <div className="home">
          <img
            src={require('../images/house-2.jpeg')}
            alt="House 2"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Modern Glass Villa</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>Canada</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>6 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              450 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$2,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 2 */}
        <div className="home">
          <img
            src={require('../images/house-3.jpeg')}
            alt="House 3"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Cozy Country House</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>UK</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>4 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              200 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$800,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 3 */}
        <div className="home">
          <img
            src={require('../images/house-4.jpeg')}
            alt="House 4"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Beautiful Family House</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 4 */}
        <div className="home">
          <img
            src={require('../images/house-5.jpeg')}
            alt="House 5"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Beautiful Family House</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 5 */}
        <div className="home">
          <img
            src={require('../images/house-6.jpeg')}
            alt="House 6"
            className="home__img"
          />
          <svg className="home__like">
            <use href={sprite + '#icon-heart-full'} />
          </svg>
          <h5 className="home__name">Beautiful Family House</h5>
          <div className="home__location">
            <svg>
              <use href={sprite + '#icon-map-pin'} />
            </svg>
            <p>USA</p>
          </div>
          <div className="home__rooms">
            <svg>
              <use href={sprite + '#icon-profile-male'} />
            </svg>
            <p>5 rooms</p>
          </div>
          <div className="home__area">
            <svg>
              <use href={sprite + '#icon-expand'} />
            </svg>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>
          <div className="home__price">
            <svg>
              <use href={sprite + '#icon-key'} />
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
        </div>
        {/* end home 6 */}
      </section>
      <section className="gallery">Gallery</section>
      <footer className="footer">Footer</footer>
    </>
  );
};

export default App;

import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Slider from '../Slider'
import Price from '../Price'
import Instagram from '../Instagram'
import classNames from 'classnames'
import styles from './Index.module.css'
import page from '../Page.module.css'
import button from '../Button.module.css'

import Parallax from 'parallax-js'
import Glide from '@glidejs/glide'

Index.propTypes = {
  city: PropTypes.string,
  specialists: PropTypes.array,
  prices: PropTypes.array,
  instagram: PropTypes.string
}

export default function Index ({ city, specialists, prices, instagram }) {
  const list = useRef()
  const scene = useRef()

  useEffect(() => {
    const parallaxInstance = new Parallax(scene.current)

    const glide = new Glide(list.current, {
      perView: 4.45,
      gap: 20,
      breakpoints: {
        760: {
          perView: 1.19
        },
        1020: {
          perView: 4.3
        },
        1430: {
          perView: 5.65
        }
      }
    })
    glide.mount()

    parallaxInstance.enable()
  }, [])

  return (
    <div className={page.root}>
      <div className={styles.top}>
        <div className={styles.placeholder} />

        <div className={styles.ppl} ref={scene}>
          <div data-depth="0.3" className={styles.l}></div>
          <div data-depth="0.4" className={styles.r}></div>
        </div>
      </div>

      <section className={classNames(page.section, styles.description)}>
        <div className={styles.text}>
          Стильный маникюр и педикюр для прогрессивных людей. Бережное отношение к мелочам и деталям.
          Акцент на естественность, натуральность, элегантность и женственность. Пространство маникюрных встреч RAIN <em>#irinarain</em>
        </div>

        <div className={styles.contacts}>
          {city === 'moscow' &&
            <>
              <p>+7 926 042-58-85</p>
              <p>10:00 — 22:00</p>
              <p>Духовской переулок, дом 17, строение 15 <br />Москва</p>
              <p>
                <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:95580">Записаться</a>
              </p>
            </>
          }

          {city === 'nizhny' &&
            <>
              <p>+7 920 111-56-88</p>
              <p>10:00 — 21:00</p>
              <p>улица Варварская, дом 32, 4 этаж <br />Нижний Новгород</p>
              <p>
                <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url="https://n81206.yclients.com/company:58259">Записаться</a>
              </p>
            </>
          }
        </div>
      </section>

      <section className={classNames(page.section, styles.slider)}>
        <Slider />
      </section>

      <section className={classNames(page.section, styles.space)}>
        <div className={styles.text}>
          <h2>Пространство</h2>

          <p>RAIN — это пространство для современных, интеллигентных, уверенных, естественных, веселых и непринужденных девушек.
             Ценящих свободу самовыражения, свободу творчества, свободу быть собой. Которые привыкли к качественному обслуживанию по доступным ценам.</p>
        </div>

        <div className={styles.free}>
          <ul>
            <li>Free WiFi</li>
            <li>Free Coffee</li>
            <li>Free Tea</li>
            <li>Free Candy Bar</li>
            <li>Free Community</li>
          </ul>
        </div>
      </section>

      <section className={classNames(page.section, styles.masters)}>
        <div className={styles.text}>
          <h2>Мастера</h2>

          <p>Неподдельность — вот что мы олицетворяем. Это — неотъемлемая часть нашего характера.</p>
        </div>
      </section>

      <section className={classNames(page.section, styles.list)}>
        <div className="glide" ref={list}>
          <div className="glide__track" data-glide-el="track">
            <div className={classNames('glide__slides')}>
              {specialists.map((specialist, _) =>
                <div className={classNames('glide__slide', styles.master)} key={_} >
                  <div className={styles.photo}>
                    <img src={specialist.photo} />
                  </div>

                  <div className={styles.name}>
                    {specialist.name} | <span className={styles.service}>{specialist.service}</span>
                  </div>

                  <div className={styles.book}>
                    <a className={classNames('ms_booking', button.sign_up, styles.button)} href="#" data-url={`https://n81206.yclients.com/?o=m${specialist.yid}`}>Записаться</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={page.section}>
        <div className={styles.sis}></div>
      </section>

      <section className={classNames(page.section, styles.philosophy)}>
        <div className={styles.text}>
          <h2>Философия</h2>

          <p>
            Мы поняли, что у нас есть только один способ отличаться от других, он заключен в людях, которых мы обслуживаем, и людях которые у нас работают.
            Мы хотим, чтобы вы чувствовали себя здесь как дома или в кругу близких друзей. Мы заботимся о наших сотрудниках также, как о гостях студии.
            Мы создаем сообщество, которое растет и развивается вместе с вами, и в котором есть место для каждой.
          </p>
        </div>

        <div className={styles.phil} />
      </section>

      <section className={classNames(page.section, styles.youtube)}>
        <div className={styles.video}>
          <iframe src="https://www.youtube.com/embed/KlSZp-dTnQk" frameBorder="0" allowFullScreen={true}></iframe>
        </div>

        <div className={styles.video_text}>
          Бэкстейдж с промо съёмок, процесс создания маникюра, уроки и другое видео <a href="//www.youtube.com/channel/UCy6W5Izwkif_RyYOMU7rafQ">на нашем Youtube канале</a>.
        </div>
      </section>

      <section className={page.section}>
        <Price
          city={city}
          prices={prices}
        />
      </section>

      {/* <section className={classNames(page.section, styles.instagram)}>
        <Instagram
          instagram_path={instagram}
        />
      </section> */}

      <section className={classNames(page.section, styles.design)}>
        <div className={styles.text}>
          <h2>Дизайн</h2>

          <p>
            Мы верим в природную красоту, которую можно увидеть во всем и во всех. Мы работаем не только для того, чтобы сделать ваши руки ухоженными и красивыми,
            но и для того, чтобы вдохновить на поиски прекрасного, любить несовершенства, ценить каждую линию на теле и историю, которую она рассказывает.
          </p>
        </div>

        <div className={styles.triangle}>
          <a href="https://www.instagram.com/irina_rain/">
            <div className={styles.pl}>@irina_rain</div>
          </a>
        </div>
      </section>

      <section className={classNames(page.section, styles.community)}>
        <div className={styles.text}>
          <h2>Сообщество</h2>

          <p>
            Мне всегда хотелось создать место теплое и уютное, где я бы могла проводить большую часть своей жизни. Заниматься творчеством и знакомиться с удивительными людьми.
            Сейчас это «RAIN». Возможно в будущем это пространство трансформируется в нечто иное, уникальное и запоминающееся.
          </p>
        </div>
      </section>

      <section className={page.section}>
        <div className={styles.rain}></div>
      </section>
    </div>
  )
}

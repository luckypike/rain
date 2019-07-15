import React, { Component } from 'react'
import { YMaps } from 'react-yandex-maps'
import { Map } from 'react-yandex-maps'
import { Placemark } from 'react-yandex-maps'

import classNames from 'classnames'
import styles from './About.module.css'

class About extends Component {
  render(){
  const { city } = this.props

    return(
      <div className={styles.root}>
        <div className={classNames(styles.top, {[styles.active]: city == "nizhny"})}>
          <div className={styles.placeholder}></div>
          <div className={styles.text}>
            {city == "moscow" &&
              <>
                <h1>
                  На темной стороне
                </h1>
                <p>
                  Духовской пер. 17с15, м. Тульская
                </p>
              </>
            }
            {city == "nizhny" &&
              <>
                <h1>
                  На светлой стороне
                </h1>
                <p>
                  Варварская 32, Нижполиграф
                </p>
              </>
            }
          </div>
        </div>

        <section className={styles.description}>
          <p>
            В RAIN нет случайных людей. Гость — наш подарок и новый виток истории. Нас выбирают, чтобы получить идеальный маникюр, наполнить
            себя ощущением лёгкости и прикоснуться к прекрасному среди серо-белых будней больших городов. Каждый дизайн — искусство, которое рождается из союза тёплого общения,
            вдохновения жизни и высокого уровня профессионализма нашей команды.
          </p>
        </section>

        <section className={styles.photo}>
          <div className={classNames(styles.tables, {[styles.active]: city == "nizhny"})}></div>
        </section>

        <section className={styles.senses}>
          <div className={styles.txt}>
            <h2>
              Приходи. Твоя очередь хорошо себя чувствовать
            </h2>
            <p>
              Мы вкладываем смысл в каждый штрих наших пространств: мебель, свет, цвет, аромат, музыка. Геометрия дизайна транспортируется в правильные линии и изгибы нашего дома RAIN.
              Все, что вы видите — решенное уравнение, наши мысли и состояние, которым мы с удовольствием делимся с гостями.
            </p>
          </div>
          <div className={classNames(styles.feel, {[styles.active]: city == "nizhny"})}></div>
        </section>

        <section className={styles.quote}>
          <div>
            {city == "moscow" &&
              <>
                <p className={styles.txt}>
                «В Москве так мало искренних мест. И я рада, что нашла одно из них. Здесь действительно заботятся о качестве, и действительно искренне рады видеть.
                Ирина, спасибо за искренний сервис, ты невероятная!)»
                </p>

                <p className={styles.author}>
                  — Светлана, отзыв на Google Картах
                </p>
              </>
            }
            {city == "nizhny" &&
              <>
                <p className={styles.txt}>
                  «Ира, настоящий феномен, бог в индустрии маникюра. Это настоящее современное искусство. Фото твоих работ смело можно выставить на экспозицию в музей Мадам Помпиду))
                  И девочки не отстают от своей вдохновительницы. Студия с концептуальным взглядом на маникюр. Каждый раз удивляете.»
                </p>

                <p className={styles.author}>
                  — Дарья, отзыв на Google Картах
                </p>
              </>
            }
          </div>
        </section>

        <section className={styles.two_photos}>
          <div className={classNames(styles.first, {[styles.active]: city == "nizhny"})}></div>
          <div className={classNames(styles.second, {[styles.active]: city == "nizhny"})}></div>
        </section>

        <section className={styles.space}>
          <div className={styles.txt}>
            {city == "moscow" &&
              <>
                <h2>
                  Космос в здании 1869 г. постройки
                </h2>
                <p>
                  RAIN находится в резиденции The Loft Club. Проходи в центральные ворота с надписью The Loft. Иди прямо, поверни налево между 7 и 1 строением,
                  поверни направо и двигайся вдоль 13 строения, пока не упрёшься в забор, поверни направо и ты на месте.
                </p>
              </>
            }
            {city == "nizhny" &&
              <>
                <h2>
                  Творчество в здании 1922 г. постройки
                </h2>
                <p>
                  RAIN находится в 500 метрах от площади Свободы. Двигайся по ул. Варварской в сторону площади Минина до Варварского корпуса Нижполиграфа.
                  Заходи в центральный вход (серая дверь), поднимайся по лестнице до аутентичного лифта слева. 4 этаж, прямо из лифта первая дверь направо.
                </p>
              </>
            }
          </div>
          <div className={styles.contacts}>
            {city == "moscow" &&
              <>
                <p>+7 926 042-58-85</p>
                <p>10:00 — 22:00</p>
                <p>Духовской переулок, дом 17, строение 15 <br />Москва</p>
              </>
            }
            {city == "nizhny" &&
              <>
                <p>+7 920 111-56-88</p>
                <p>10:00 — 21:00</p>
                <p>улица Варварская, дом 32, 4 этаж <br />Нижний Новгород</p>
              </>
            }
          </div>
        </section>
        <section className={styles.roads}>
          <>
            {city == "moscow" &&
              <>
                <div className={styles.road}></div>
                <div className={styles.txt}>Схема движения по Лофту</div>
                <div className={styles.map}>
                  <YMaps>
                    <Map className={styles.ymap} width={'100%'} defaultState={{ center: [55.70396134345921,37.61621489615489], zoom: 17, width: 100 }}>
                       <Placemark defaultGeometry={[55.703926508209996,37.61622026057294]} />
                    </Map>
                  </YMaps>
                </div>
                <a href="https://yandex.ru/maps/org/rain/206263032856/" target="_blank">Смотреть на карте</a>
              </>
            }
            {city == "nizhny" &&
              <>
                <div className={styles.map}>
                  <YMaps>
                    <Map className={styles.ymap} width={'100%'} defaultState={{ center: [56.32133294171527,44.01283283463593], zoom: 18 , width: 100 }}>
                       <Placemark defaultGeometry={[56.32136200567305,44.0128234469044]} />
                    </Map>
                  </YMaps>
                </div>
                <a href="https://yandex.ru/maps/org/rain/110269202779/" target="_blank">Смотреть на карте</a>
              </>
            }
          </>
        </section>
      </div>
    )
  }
}

export default About

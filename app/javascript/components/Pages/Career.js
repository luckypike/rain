import React, { Component } from 'react'

import classNames from 'classnames'
import styles from './Career.module.css'
import page from '../Page.module.css'

import Parallax from 'parallax-js';

class Career extends Component {

  mount = React.createRef()

  componentDidMount() {
    this.parallaxInstance = new Parallax(scene, {
      relativeInput: true
    })
  }

  render() {
    const { city } = this.props

    return(
      <div className={page.root}>
        <div className={styles.top}>
          <div className={styles.placeholder}></div>
          <div id="scene" className={styles.ppl}>
            <div data-depth="0.3" className={styles.l}></div>
            <div data-depth="0.4" className={styles.r}></div>
          </div>
          <div className={page.text}>
            <h1>
              Пространство для тебя
            </h1>
            <p>
              Добро пожаловать в команду
            </p>
          </div>
        </div>

        <section className={classNames(page.section, styles.description)}>
          <p>
            Наша цель — служить людям. Определить в каком настроении пришел гость, отвлечься от своих проблем и заботиться о нем всей душой, исполнять его, а не свои желания.
            Самая большая ошибка, которую мы можем совершить — это не обращать внимание на людей.
          </p>
        </section>

        <section className={classNames(page.section, styles.value)}>
          <div className={styles.title}>
            <h2>
              Ощущение собственной значимости
            </h2>
          </div>

          <div className={styles.txt}>
            Работа в RAIN — это что-то большее, мы вкладываем свое сердце в работу, а не просто отрабатываем смену. Эта любовь к делу.
            Мы заинтересованы в неравнодушных сотрудниках по-настоящему любящих свое дело.
          </div>

          <div className={styles.txt}>
            Когда вы присоединяетесь к команде RAIN — вы становитесь важной частью нас, частью единого целого.
            Нашим приоритетом является забота о своих людях. Мы обучаем и вкладываем силы в лучших людей.
          </div>
        </section>

        <section className={page.section}>
          <div className={styles.rain}></div>
        </section>

        <section className={classNames(page.section, styles.atmo)}>
          <div className={styles.title}>
            <h2>
              Благоприятная атмосфера
            </h2>
          </div>

          <div className={styles.list}>
            <ul>
              {city == "moscow" &&
                <li>
                  чистое, уютное, стильное пространство в лофт апартаментах The Loft Club;
                </li>
              }
              {city == "nizhny" &&
                <li>
                  чистое, уютное, стильное пространство;
                </li>
              }
              <li>
                оборудованное рабочее место;
              </li>
              <li>
                работа на материалах студии;
              </li>
              <li>
                все необходимое оборудование для дезинфекции и стерилизации предметов;
              </li>
              <li>
                достойная зарплата и денежные вознаграждения;
              </li>
            </ul>
          </div>

          <div className={styles.list}>
            <ul>
              <li>
                полная занятость, постоянные гости, плотная запись 5 человек в день;
              </li>
              <li>
                сотрудники бесплатно посещают концерты и публичные мероприятия, организованные нашими партнерами;
              </li>
              <li>
                1 раз в полгода для мастеров организуется обучение в Москве или приглашается квалифицированный инструктор из Москвы.
              </li>
            </ul>
          </div>
        </section>

        <section className={classNames(page.section, styles.dev)}>
          <div className={styles.develop}></div>
          <div className={styles.txt}>
            <h2>
              Личное развитие
            </h2>
            <p>
              Мы превращаем сегодняшнего ученика в топ-мастера завтрашнего дня! Мы с радостью приветствуем молодых амбициозных страстных и преданных людей, которые увлечены своей работой.
            </p>
          </div>
        </section>

        <section className={classNames(page.section, styles.vacancies)}>
          {city == "moscow" &&
            <h2>Вакансии в Москве</h2>
          }
          {city == "nizhny" &&
            <h2>Вакансии в Нижнем Новгороде</h2>
          }
          <div className={styles.vacancy}>
            <h3>Мастер маникюра и педикюра</h3>
            <p><strong>Минимальные требования:</strong></p>
            <ul>
              <li>
                опыт работы от 1 года;
              </li>
              <li>
                умение делать свою работу лучше других;
              </li>
              <li>
                мастер в совершенстве владеет техникой обрезного и аппаратного маникюра;
              </li>
              <li>
                выполнение маникюра с покрытием и дизайном за 2 часа, в идеале за 1,5;
              </li>
              <li>
                умение повторить любую работу, выложенную в наших профилях в социальных сетях;
              </li>
              <li>
                искренняя дружелюбность к гостям студии.
              </li>
            </ul>
            <p><strong>Заработная плата и график:</strong></p>
            <ul>
              {city == "moscow" &&
                <li>
                  мастер зарабатывает 40, 50 или 60% от выручки (не меньше 60 000 ₽ в месяц);
                </li>
              }
              {city == "nizhny" &&
                <li>
                  мастер зарабатывает 40, 50 или 60% от выручки (не меньше 40 000 ₽ в месяц);
                </li>
              }
              <li>
                возможный график работы 2/2, 3/2 или 4/2;
              </li>
              {city == "moscow" &&
                <li>
                  начало рабочего дня в 11:00, окончание в 22:00.
                </li>
              }
              {city == "nizhny" &&
                <li>
                  начало рабочего дня в 10:00, окончание в 21:00.
                </li>
              }
            </ul>
            <p>Для начала разговора напишите на почту <a href="mailto:info@irinarain.com">info@irinarain.com</a> о себе и своем опыте работы.
               Пришлите несколько фотографий своих лучших работ. Потом мы зададим несколько вопросов, которые помогут нам понять, что вы за человек и сможете ли вы дополнить наш коллектив, а мы, в свою очередь, создать для вас комфортные условия для работы.
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export default Career

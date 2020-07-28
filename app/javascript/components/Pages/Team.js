import React from 'react'
import PropTypes from 'prop-types'
import { deserialize } from 'jsonapi-deserializer'

import classNames from 'classnames'
import styles from './Team.module.css'
import page from '../Page.module.css'

Team.propTypes = {
  city: PropTypes.string,
  specialists: PropTypes.object
}

export default function Team ({ city, specialists: specialistsData }) {
  const specialists = deserialize(specialistsData)

  return (
    <div className={page.root}>
      <div className={styles.top}>
        <div className={styles.placeholder} />

        <div className={page.text}>
          <h1>
            Основа нашей магии
          </h1>

          <p>
            Отточенное профессиональное мастерство
          </p>
        </div>
      </div>

      <section className={classNames(styles.description, page.section)}>
        <p>
          Мы создаем не форму, покрытие или дизайн. Мы создаем настроение, с которым девушки будут жить ближайшие несколько недель.
          Мы любим пробовать неизведанное, не просто следовать моде, а обновлять, изменять её,
          создавать работу, которая расходится сотнями копий.
        </p>
      </section>

      <section className={classNames(styles.photo, page.section)}>
        <div className={styles.girls} />
      </section>

      <section className={classNames(styles.description, page.section)}>
        <div className={styles.txt}>
          <h2>
            Искусство можно только чувствовать
          </h2>

          <p>
            Мода, дизайн, архитектура, искусство, музыка и улица является вдохновляющим источником для нового.
            Идеи приходят с каждой из сторон. Они могут возникать из работы с командой.
            Мы видим больше, чем могли бы видеть работая в одиночку. В каждой работе есть такой момент. Это неописуемый восторг.
            Словно мы сотворили магию на секунду.
          </p>
        </div>
      </section>

      <section className={classNames(styles.team, page.section)}>
        {specialists &&
          <div className={styles.specialists}>
            {specialists.map((specialist, _) =>
              <div className={styles.list} key={_}>
                {specialist.photo &&
                  <div className={styles.specialist}>
                    <img src={`https://irinarain.com/s3/rs:fill:800:1000/g:sm/q:75/${specialist.photo.encoded_path}`} />
                  </div>
                }

                {specialist.service &&
                  <div className={styles.service}>
                    {specialist.service}
                  </div>
                }

                {specialist.name &&
                  <div className={styles.name}>
                    {specialist.name}
                  </div>
                }
              </div>
            )}
          </div>
        }
      </section>
    </div>
  )
}

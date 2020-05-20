import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Subscription from './Sale/Subscription'
import Certificate from './Sale/Certificate'
import Photos from './Sale/Photos'
import Names from './Sale/Names'

import styles from './Sale.module.css'
import page from '../Page.module.css'

Sale.propTypes = {
  city: PropTypes.string,
  specialists: PropTypes.array
}

export default function Sale ({ city, specialists }) {
  const [active, setActive] = useState(0)

  const openTab = e => setActive(+e.target.dataset.index)

  const tabs = [
    { title: 'Топ-мастер' },
    { title: 'Мастер' }
  ]

  console.log(specialists.filter(s => s.service !== 'Мастер маникюра и педикюра'))

  return (
    <div className={page.root}>
      <section className={classNames(page.section, styles.top, styles.section)}>
        <div className={styles.title}>
          <h1>
            Акции
          </h1>
        </div>

        <div className={styles.desc}>
          <h3>
            Дарите глубокие впечатления от качественного обслуживания и маникюра, способного рассказать историю.
          </h3>
        </div>
      </section>

      <section className={classNames(page.section, styles.section)}>
        <div className={styles.title}>
          <h2>
            Абонименты
          </h2>
        </div>

        <div className={styles.text}>
          Пакеты по 2, 3 и 5 визитов к разным категориям мастеров. Чем больше визитов в пакете, тем выше процент скидки. Если вы выбираете подарок, то рекомендуем купить сертификат на фиксированную сумму.
        </div>

        <div className={styles.specialists}>
          <div className={styles.tabs}>
            {tabs.map((tab, i) =>
              <div
                key={i}
                className={classNames(styles.tab, { [styles.active]: active === i })}
                data-index={i}
                onClick={openTab}
              >
                {tab.title}
              </div>
            )}
          </div>

          {active === 0 &&
            <div className={styles.active1}>
              <>
                {specialists.filter(s => s.service !== 'Мастер маникюра и педикюра').map((specialist, i) =>
                  <Photos key={i} specialist={specialist} />
                )}
              </>
              <>
                {specialists.filter(s => s.service !== 'Мастер маникюра и педикюра').map((specialist, i) =>
                  <Names key={i} specialist={specialist} />
                )}
              </>
            </div>
          }

          {active === 1 &&
            <div className={styles.active2}>
              {specialists.filter(s => s.service === 'Мастер маникюра и педикюра').map((specialist, i) =>
                <Photos key={i} specialist={specialist} />
              )}
              {specialists.filter(s => s.service === 'Мастер маникюра и педикюра').map((specialist, i) =>
                <Names key={i} specialist={specialist} />
              )}
            </div>
          }
        </div>

        <Subscription />
      </section>

      <section className={classNames(page.section, styles.section)}>
        <div className={styles.title}>
          <h1>
            Сертификаты
          </h1>
        </div>

        <div className={styles.text}>
          В отличие от абонемента не привязан к услуге и категории мастера, его можно потратить на любые услуги или товары студии. Допускается многократное списание. Сертификат действителен для одного человека.
        </div>

        <Certificate />
      </section>

      <section className={classNames(page.section, styles.section)}>
        <div className={styles.text}>
          Электронный сертификат приходит на электронную почту сразу после оплаты. Просто перешлите его тому, кому вы хотите сделать подарок.
        </div>
      </section>
    </div>
  )
}

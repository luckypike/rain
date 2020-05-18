import React, { useState } from 'react'
import classNames from 'classnames'

import Subscription from './Sale/Subscription'
import Certificate from './Sale/Certificate'

import styles from './Sale.module.css'
import page from '../Page.module.css'

export default function Sale () {
  const [tab, setTab] = useState(0)

  return (
    <div className={page.root}>
      <section className={classNames(page.section, styles.top)}>
        <div className={styles.title}>
          <h1>
            Акции
          </h1>
        </div>

        <div className={styles.desc}>
          Дарите глубокие впечатления от качественного обслуживания и маникюра, способного рассказать историю.
        </div>
      </section>

      <section className={page.section}>
        <div className={styles.title}>
          <h2>
            Абонименты
          </h2>
        </div>

        <div className={styles.packages}>
          Пакеты по 2, 3 и 5 визитов к разным категориям мастеров. Чем больше визитов в пакете, тем выше процент скидки. Если вы выбираете подарок, то рекомендуем купить сертификат на фиксированную сумму.
        </div>

        <div className={styles.tabs}>
          <div className={classNames(styles.tab, { [styles.active]: tab === 0 })} onClick={() => setTab(0)}>
            <h2>
              Топ–мастер
            </h2>
          </div>

          <div className={classNames(styles.tab, { [styles.active]: tab === 1 })} onClick={() => setTab(1)}>
            <h2>
              Мастер
            </h2>
          </div>
        </div>

        <div className={styles.masters}>
          Ирина, Вероника
        </div>

        <Subscription />
      </section>

      <section className={page.section}>
        <div className={styles.title}>
          <h1>
            Сертификаты
          </h1>
        </div>

        <div className={styles.desc}>
          В отличие от абонемента не привязан к услуге и категории мастера, его можно потратить на любые услуги или товары студии. Допускается многократное списание. Сертификат действителен для одного человека.
        </div>

        <Certificate />
      </section>

      <section className={page.section}>
        <p>
          Электронный сертификат приходит на электронную почту сразу после оплаты. Просто перешлите его тому, кому вы хотите сделать подарок.
        </p>
      </section>
    </div>
  )
}

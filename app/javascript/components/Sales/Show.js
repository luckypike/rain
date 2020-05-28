import React from 'react'
import classNames from 'classnames'
import axios from 'axios'
import PropTypes from 'prop-types'

import { Errors, useForm } from '../Form'

import styles from './Show.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'
import form from '../Form.module.css'

Show.propTypes = {
  sale: PropTypes.object
}

export default function Show ({ sale }) {
  const {
    values,
    setSaved,
    handleInputChange,
    errors,
    pending,
    setErrors,
    onSubmit,
    cancelToken
  } = useForm({ name: '', surname: '', phone: '', email: '', sale_id: sale.id })

  const handleSubmit = async e => {
    await axios.post(
      '/orders',
      { order: values },
      { cancelToken: cancelToken.current.token }
    ).then(res => {
      setSaved(true)
    }).catch(error => {
      setErrors(error.response.data)
    })
  }

  return (
    <div className={classNames(styles.top, page.root)}>
      <div className={styles.section}>
        <div className={styles.title}>
          <h1>Ваш заказ</h1>
        </div>

        <div className={styles.desc}>
          Сформирован и готов к оплате. Заполните контактные данные и оплатите онлайн.
        </div>

        <div className={styles.order}>
          <div className={styles.form}>
            <form onSubmit={onSubmit(handleSubmit)}>
              <div className={styles.name}>
                <div className={form.input}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя *"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Errors errors={errors.name} />
              </div>

              <div className={styles.surname}>
                <div className={form.input}>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Фамилия *"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Errors errors={errors.surname} />
              </div>

              <div className={styles.phone}>
                <div className={form.input}>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+7 900 100 20 30 *"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Errors errors={errors.phone} />
              </div>

              <div className={styles.email}>
                <div className={form.input}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Почта *"
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Errors errors={errors.email} />
              </div>
            </form>
          </div>

          <div className={styles.pay}>
            <div className={styles.root}>
              <div className={styles.type}>
                <div className={styles.text}>
                  Абонимент на маникюр с покрытием к топ&#8209;мастеру на 5 визитов
                </div>

                <div className={styles.price}>
                  10400 ₽
                </div>
              </div>

              <form onSubmit={onSubmit(handleSubmit)}>
                <div className={fonts.h3}>
                  <input className={styles.button} type="submit" value={pending ? 'Оплата...' : 'Оплатить'} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import classNames from 'classnames'
import axios from 'axios'
import PropTypes from 'prop-types'

import { Errors, useForm } from '../Form'
import { useI18n } from '../I18n'

import styles from './Show.module.css'
import page from '../Page.module.css'
import fonts from '../Fonts.module.css'
import form from '../Form.module.css'

Show.propTypes = {
  sale: PropTypes.object,
  city: PropTypes.string,
  locale: PropTypes.string
}

export default function Show ({ city, sale, locale }) {
  const I18n = useI18n(locale)

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
      window.location = res.headers.location
    }).catch(error => {
      setErrors(error.response.data)
      setSaved(false)
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
                <div className={classNames(form.input, styles.name)}>
                  <input
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                  <div className={form.label}>
                    Имя
                  </div>
                </div>

                <Errors errors={errors.name} />
              </div>

              <div className={styles.surname}>
                <div className={classNames(form.input, styles.surname)}>
                  <input
                    type="text"
                    name="surname"
                    onChange={handleInputChange}
                    required
                  />

                  <div className={form.label}>
                    Фамилия
                  </div>
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
                <div className={classNames(form.input, styles.email)}>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInputChange}
                    required
                  />
                  <div className={form.label}>
                    Почта
                  </div>
                </div>

                <Errors errors={errors.email} />
              </div>
            </form>
          </div>

          <div className={styles.pay}>
            <div className={styles.root}>
              <div className={styles.type}>
                <div className={styles.text}>
                  {sale.state === 'Абонимент' &&
                    <>
                      {sale.state} на маникюр с покрытием к топ&#8209;мастеру на {I18n.t('sales.quantity', { count: sale.quantity })}
                    </>
                  }

                  {sale.state === 'Сертификат' &&
                    <>
                      {sale.state}
                    </>
                  }
                </div>

                <div className={styles.price}>
                  {city === 'moscow' ? sale.price_sale_msk : sale.price_sale_nn } ₽
                </div>
              </div>

              <form onSubmit={onSubmit(handleSubmit)}>
                <div className={fonts.h3}>
                  <input
                    className={classNames(styles.button, { [styles.disabled]: values.name === '' || values.surname === '' || values.phone === '' || values.email === '' })}
                    type="submit"
                    value={pending ? 'Оплата...' : 'Оплатить'}
                    disabled={pending || values.name === '' || values.surname === '' || values.phone === '' || values.email === ''}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

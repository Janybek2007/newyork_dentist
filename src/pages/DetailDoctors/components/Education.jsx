/* eslint-disable react/prop-types */
import styles from '../page.module.scss'

export default function Education({ doc }) {
  return (
    <section id={'section2'} className="mb-20">
      <h1 data-aos="fade-up">Образование врача</h1>
      <div className={styles['education-content']}>
        {doc?.education &&
          doc?.education?.map((item, idx) => (
            <li key={idx} className={styles.list}>
              <div className={styles['education-left']}>
                {doc.education.some && doc.education.some && (
                  <>
                    <p data-aos="fade-up" className="mb-10">
                      {item?.description}
                    </p>
                    <div className={styles['education']}>
                      <h3 data-aos="fade-up">Основное</h3>
                      <ul>
                        {item?.sub_education
                          ?.filter((educate) => educate.category === 'ОСНОВНОЕ')
                          .map((educate, idx) => (
                            <li data-aos-duration={idx * 500} data-aos="fade-up" key={idx}>
                              <span data-aos="fade-up">{educate.year}</span>
                              <p data-aos="fade-up">{educate.description}</p>
                            </li>
                          ))
                          .slice(0, 2)}
                      </ul>
                    </div>
                    <div className={styles['education']}>
                      <h3 data-aos="fade-up">Дополнительное</h3>
                      <ul>
                        {item?.sub_education
                          ?.filter((educate) => educate.category === 'ДОПОЛНИТЕЛЬНОЕ')
                          .map((educate, idx) => (
                            <li data-aos-duration={idx * 500} data-aos="fade-up" key={idx}>
                              <span data-aos="fade-up">{educate.year}</span>
                              <p data-aos="fade-up">{educate.description}</p>
                            </li>
                          ))
                          .slice(0, 2)}
                      </ul>
                    </div>
                    <button data-aos="fade-up" className={styles['show_more']}>
                      Показать ещё
                    </button>
                  </>
                )}
              </div>
              <div className={styles['education-right']}>
                {doc.images && (
                  <>
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-start gap-5">
                        <div className="flex flex-col items-start gap-5">
                          <img
                            data-aos="fade-up"
                            className={styles['one-type']}
                            src={'https://akmatovt.pythonanywhere.com/media/' + doc.images[0]}
                            alt="doc"
                          />
                          <img
                            data-aos="fade-up"
                            className={styles['one-type']}
                            src={'https://akmatovt.pythonanywhere.com/media/' + doc.images[1]}
                            alt="doc"
                          />
                        </div>
                        <img
                          data-aos="fade-up"
                          className={styles['two-type']}
                          src={'https://akmatovt.pythonanywhere.com/media/' + doc.images[2]}
                          alt="doc"
                        />
                      </div>
                      <img
                        data-aos="fade-up"
                        className={styles['three-type']}
                        src={'https://akmatovt.pythonanywhere.com/media/' + doc.images[3]}
                        alt="doc"
                      />
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
      </div>
    </section>
  )
}

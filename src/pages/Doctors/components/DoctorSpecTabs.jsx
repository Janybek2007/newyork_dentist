import clsx from 'clsx'
import { useDoc } from '../../../app/context/DoctorsContext'
import styles from '../page.module.scss'
import { useWindowSize } from './../../../entity/hooks/useWindowSize'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function DoctorSpecTabs() {
  const { docTabs, tabSpec, setTabSpec } = useDoc()
  const { width } = useWindowSize()
  return (
    <>
      {width > 640 ? (
        <div className={styles.tabs}>
          {docTabs.map((item) => (
            <button
              onClick={() => setTabSpec(item.toLowerCase())}
              className={clsx({
                [styles.active]: item.toLowerCase() === tabSpec.toLowerCase(),
              })}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      ) : (
        <Swiper className={styles.swiper_tabs} spaceBetween={10} slidesPerView={width <= 340 ? 2 : 3}>
          {docTabs.map((item) => (
            <SwiperSlide
              className={clsx(styles.swiper_slide, {
                [styles.active]: item.toLowerCase() === tabSpec.toLowerCase(),
              })}
              key={item}
              onClick={() => setTabSpec(item.toLowerCase())}
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}

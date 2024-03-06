import { FaArrowRight } from 'react-icons/fa'
import UserPic from './Group 585.png'
import './Reviews.css'
import PenReview from './edit (1) 1.png'
import ChatSquare from './message-square 2.png'

const Reviews = () => {
	return (
		<div id='reviews'>
			<div className='container'>
				<div className='reviews'>
					<div className='reviews-title'>
						<h1 data-aos='fade-up' data-aos-duration={1 * 300}>
							Только честные отзывы
						</h1>
						<p data-aos='fade-up' data-aos-duration={2 * 300}>
							Все отзывы <FaArrowRight />
						</p>
					</div>
					<div className='main-reviews'>
						<div className='text-review'>
							<div className='description-review'>
								<img
									data-aos='fade-up'
									data-aos-duration={1 * 300}
									src={ChatSquare}
									alt=''
								/>
								<h3 data-aos='fade-up' data-aos-duration={2 * 300}>
									Мы за честность!
								</h3>
								<p data-aos='fade-up' data-aos-duration={3 * 300}>
									Убедиться в наших отзывах легко — просто напишите пациентам,
									оставившим <br />
									<br /> отзывы, и поинтересуйтесь о качестве услуг и сервиса
									нашей стоматологии
								</p>
							</div>
							<div className='cut-review'></div>
							<div className='write-review'>
								<img
									data-aos='fade-up'
									data-aos-duration={1 * 300}
									src={PenReview}
									alt=''
								/>
								<p data-aos='fade-up' data-aos-duration={2 * 300}>
									Оставьте свой отзыв. Это очень ценно для нас! <br />
									<br /> Всего несколько слов о качестве, сервисе и результате.
								</p>
								<button data-aos='fade-up' data-aos-duration={3 * 300}>
									Написать отзыв
								</button>
							</div>
						</div>

						<div className='review-list'>
							<div
								className='review-card'
								data-aos='fade-up'
								data-aos-duration={1 * 300}
							>
								<div className='user-info'>
									<div className='user-pic-name'>
										<img src={UserPic} alt=':/' />
										<div className='user-name'>
											<h5>Алексей Иванов</h5>
											<p>12 августа</p>
										</div>
									</div>
									<p className='social-link'>
										ссылка на профиль в{' '}
										<FaArrowRight style={{ marginLeft: '10px' }} />
									</p>
								</div>
								<p className='review-user'>
									Вам не должны предлагать установку имплантов в день посещения
									и только на основании панорамного снимка или визуального
									осмотра. Важна тщательная диагностика, а также проведение
									компьютерной томографии, сдача анализов крови. <br />
									<br /> Наша стоматология работает по международным стандартам
									комплексной диагностики: сбор анамнеза, комплексные анализы,
									визуальный осмотр полости рта, анализ компьютерной томографии,
									фотометрия лица пациента и снятие параметров прикуса. Только
									после этого имплантолог и ортопед могут составить
									предварительные планы лечения, которые впоследствии нужно
									будет уточнить в процессе компьютерного моделирования и
									дополнительной диагностики по назначению
								</p>
								<div className='line-review'></div>
								<h4 className='response-review'>
									Александр, добрый день! Искренне благодарим вас за отзыв и
									такие приятные слова в адрес нашей клиники. Здоровья вам и
									всего наилучшего!
								</h4>
							</div>
							<div
								className='review-card'
								data-aos='fade-up'
								data-aos-duration={2 * 300}
							>
								<div className='user-info'>
									<div className='user-pic-name'>
										<img src={UserPic} alt=':/' />
										<div className='user-name'>
											<h5>Алексей Иванов</h5>
											<p>12 августа</p>
										</div>
									</div>
									<p className='social-link'>
										ссылка на профиль в{' '}
										<FaArrowRight style={{ marginLeft: '10px' }} />
									</p>
								</div>
								<p className='review-user'>
									Вам не должны предлагать установку имплантов в день посещения
									и только на основании панорамного снимка или визуального
									осмотра. Важна тщательная диагностика, а также проведение
									компьютерной томографии, сдача анализов крови. <br />
									<br /> Наша стоматология работает по международным стандартам
									комплексной диагностики: сбор анамнеза, комплексные анализы,
									визуальный осмотр полости рта, анализ компьютерной томографии,
									фотометрия лица пациента и снятие параметров прикуса. Только
									после этого имплантолог и ортопед могут составить
									предварительные планы лечения, которые впоследствии нужно
									будет уточнить в процессе компьютерного моделирования и
									дополнительной диагностики по назначению
								</p>
								<div className='line-review'></div>
								<h4 className='response-review'>
									Александр, добрый день! Искренне благодарим вас за отзыв и
									такие приятные слова в адрес нашей клиники. Здоровья вам и
									всего наилучшего!
								</h4>
							</div>
							<button className='more-review'>Показать ещё отзыв</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews

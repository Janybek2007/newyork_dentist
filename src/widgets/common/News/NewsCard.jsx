/* eslint-disable react/prop-types */

function NewsCard({ el, index }) {
	return (
		<div
			data-aos='fade-left'
			data-aos-duration={index * 300}
			className='newCard'
		>
			<h3>{el.title}</h3>
			<p>{el.info}</p>
			<p>
				<span>{el.date}</span>
			</p>
		</div>
	)
}

export default NewsCard

import React from 'react'
import { GrFormNextLink } from 'react-icons/gr'

const Card = () => {
	return (
		<div className='container py-20'>
			<div className='flex items-center justify-between'>
				<div
					data-aos='zoom-out-right'
					className='bg-[#2CB2BB] w-[386px] h-[234px] rounded-lg'
				>
					<div className='pt-20 mx-11 '>
						<div className='flex items-start justify-start flex-col '>
							<svg
								width='50'
								height='40'
								viewBox='0 0 50 40'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M8 0C3.58173 0 0 3.25617 0 7.27273V12.7273H16.0288C15.9564 11.3144 16.0118 9.91144 16.3566 8.70428C17.7866 3.69784 21.6964 0.909091 25.0002 0.909091C28.3039 0.909091 32.2138 3.69784 33.6437 8.70428C33.9885 9.91144 34.0439 11.3144 33.9716 12.7273H50V7.27273C50 3.25617 46.4183 0 42 0H8ZM32.9703 12.7273C33.0437 11.3654 32.9943 10.0479 32.6758 8.93288C31.3211 4.18968 27.709 1.81818 25.0002 1.81818C24.0306 1.81818 22.9453 2.12199 21.8893 2.72962C19.9947 3.81962 18.1941 5.88739 17.3243 8.93294C16.7083 11.0894 17.0988 14.0028 17.4377 16.5315V16.5315C17.6137 17.8448 17.7758 19.0544 17.7758 20.0001C17.7758 20.9459 17.6137 22.1554 17.4377 23.4688V23.4688C17.0988 25.9974 16.7083 28.9109 17.3243 31.0673C18.679 35.8104 22.2911 38.1819 24.9999 38.1819C25.6772 38.1819 26.411 38.0337 27.1518 37.7372C27.5327 37.5847 27.9154 37.3931 28.2933 37.1623C30.1202 36.0465 31.8339 34.0148 32.6758 31.0671C32.9943 29.9521 33.0437 28.6346 32.9703 27.2727H32.9701C32.9538 26.9713 32.9316 26.6677 32.9049 26.3636H32.9051C32.8192 25.3844 32.6873 24.4003 32.5624 23.4686C32.3864 22.1553 32.2243 20.9457 32.2243 20C32.2243 19.0543 32.3864 17.8447 32.5624 16.5314C32.6873 15.5997 32.8192 14.6156 32.9051 13.6364H32.9049C32.9316 13.3323 32.9538 13.0287 32.9701 12.7273H32.9703ZM16.0914 13.6364H0V26.3636H16.0914C16.1766 25.3624 16.3088 24.3763 16.4301 23.4719L16.4301 23.4718L16.4301 23.4717L16.4301 23.4715L16.4302 23.4714L16.4302 23.4714L16.4304 23.4695L16.4453 23.3587C16.624 22.025 16.776 20.8782 16.776 20C16.776 19.1218 16.624 17.975 16.4453 16.6413L16.4304 16.5305L16.4302 16.5286L16.4302 16.5286C16.3089 15.624 16.1766 14.6377 16.0914 13.6364ZM0 27.2727H16.0288C15.9564 28.6856 16.0118 30.0886 16.3566 31.2957C17.7866 36.3022 21.6964 39.0909 25.0002 39.0909C28.3039 39.0909 32.2138 36.3022 33.6437 31.2957C33.9885 30.0886 34.0439 28.6856 33.9716 27.2727H50V32.7273C50 36.7438 46.4183 40 42 40H8C3.58173 40 0 36.7438 0 32.7273V27.2727ZM50 26.3636H33.9089C33.8237 25.3623 33.6915 24.376 33.5702 23.4714L33.5699 23.4695L33.5551 23.3587C33.3763 22.025 33.2243 20.8782 33.2243 20C33.2243 19.1218 33.3763 17.975 33.5551 16.6413L33.5699 16.5305L33.5702 16.5286C33.6915 15.624 33.8237 14.6377 33.9089 13.6364H50V26.3636Z'
									fill='white'
								/>
							</svg>
						</div>

						<h1 className='mt-3 text-white font-light text-2xl'>
							<pre>1234 5678 9012 3456</pre>
						</h1>
						<div className='flex items-center justify-evenly mt-3'>
							<h4 className='text-white text-[9px]'>
								VALID <br /> THRU
							</h4>
							<div className='flex flex-col'>
								<h3 className='text-white text-[9px]'>MONTH/YEAR</h3>
								<h1 className='text-white'>12/32</h1>
							</div>
						</div>
					</div>
				</div>
				<div data-aos='zoom-out-left' className='mr-9'>
					<h1 className='text-3xl font-bold text-[#253F41]'>
						Установка импланта в рассрочку <br /> или кредит от 1 500 рублей в
						месяц
					</h1>
					<h4 className='flex items-center gap-2 text-[#2CB2BB] font-bold text-sm mt-7 cursor-pointer'>
						Читать подробнее <GrFormNextLink className='text-lg' />
					</h4>
				</div>
			</div>
		</div>
	)
}

export default Card

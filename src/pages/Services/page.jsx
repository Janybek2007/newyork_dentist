import { LuDot } from 'react-icons/lu'
import Year from './components/Year'
import Our from '../../widgets/common/Our/Our'
import Description from './components/Description'
import Implants from './components/Implants'
import Stage from './components/Stage'
import Card from './components/Card'
import Useful from './components/Useful'
import Form from './components/Form'
import Blocks from './components/Blocks'

const ServicesPage = () => {
	return (
		<div className=''>
			<div className='bg-[#F2FAFB] py-3'>
				<div className='container'>
					<h1 className='flex items-center gap-2 text-[#2CB2BB]'>
						Услуги <LuDot />
						Имплантация зубов с тройной гарантией
					</h1>
				</div>
			</div>
			<div className='my-16'>
				<Year />
				<Our />
				<Description />
				<Implants />
				<Stage />
				<Card />
				<Useful />
				<Form />
				<Blocks />
			</div>
		</div>
	)
}

export default ServicesPage
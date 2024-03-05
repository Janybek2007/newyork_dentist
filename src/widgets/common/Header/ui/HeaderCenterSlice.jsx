import HeaderLogo from '../../../../shared/assets/images/header1-logo.png'
import Class from '../../../../shared/assets/images/header-class.svg'
import Facebook from '../../../../shared/assets/images/header-fasebook.svg'
import Instagram from '../../../../shared/assets/images/header-insta.svg'
import HeaderWhiteLogo from '../../../../shared/assets/images/header-logo-white.svg'
import VK from '../../../../shared/assets/images/header-vk.svg'
import Youtube from '../../../../shared/assets/images/header-you.svg'
import styles from '../index.module.css'

//
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import Medal from '../../../../shared/assets/images/medal.svg'
import Message from '../../../../shared/assets/images/message.icons.svg'
import Pencil from '../../../../shared/assets/images/pencil.svg'
import { useWindowSize } from '../../../../entity/hooks/useWindowSize'

// eslint-disable-next-line react/prop-types
export const HeaderCenterSlice = ({ isMenu, toggleIsMenu }) => {
	const { width } = useWindowSize()
	return (
		<div className={styles['center-slice']}>
			<div className={`container ${styles.container}`}>
				<div className={styles.logo}>
					<img src={width < 850 ? HeaderWhiteLogo : HeaderLogo} alt='logo' />
				</div>
				<div className={styles.end}>
					<div className={styles['links']}>
						<img src={Class} alt='' />
						<img src={Instagram} alt='' />
						<img src={VK} alt='' />
						<img src={Facebook} alt='' />
						<img src={Youtube} alt='' />
					</div>
					<div className={styles.buttons}>
						<button>
							<img src={Medal} alt='' />
							Награды и сертификаты
						</button>
						<button>
							<img src={Message} alt='' />
							Оставить отзыв или написать директору
						</button>
						<button>
							<img src={Pencil} alt='' />
							Записаться на приём
						</button>
						<button onClick={() => toggleIsMenu()}>
							{isMenu ? <IoClose /> : <FiMenu />}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

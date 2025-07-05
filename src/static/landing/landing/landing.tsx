import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { motion } from 'motion/react'
import { Typewriter } from 'react-simple-typewriter'
import Button from '@/components/button/button.components'
import { useRouter } from 'next/navigation'
import HeroImage from './heroImages.component'

const Landing = () => {
	const router = useRouter()

	return (
		<div className="w-full h-screen">
			<div className="h-full flex flex-col items-center justify-center gap-10 lg:flex-row">
				<HeroImage image="/me-self.jpeg" />
				<div className="flex flex-col items-center justify-center gap-10 lg:justify-start lg:items-start">
					<span className="max-w-60 flex flex-wrap items-center justify-center text-4xl lg:max-w-xl lg:text-7xl">
						<span>
							<Typewriter cursor loop={1} words={['ANDY WIJAYA NUSANTARA.']} />
						</span>
					</span>
					<span className="flex flex-col justify-center gap-10 items-center">
						<p className="text-center lg:max-w-lg">
							A web developer based in Indonesia. I create user-friendly web
							with modern tools.
						</p>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Button title="button" onClick={() => router.push('/#shelf')}>
								<p>See what i&apos;ve done</p>
								<Icon icon="hugeicons:link-backward" />
							</Button>
						</motion.div>
					</span>
				</div>
			</div>
		</div>
	)
}

export default Landing

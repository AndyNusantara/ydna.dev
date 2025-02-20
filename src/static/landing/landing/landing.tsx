'use client'

import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Typewriter } from 'react-simple-typewriter'

export default function Landing() {
	return (
		<div className="w-full h-screen">
			<div className="flex flex-col items-center justify-center lg:flex-row gap-10 h-full">
				<div className="rounded-full overflow-hidden size-[200px] lg:size-[400px] relative">
					<Image src="/me-self.jpeg" alt="" fill className="object-cover" />
				</div>
				<div className="flex flex-col items-center justify-center gap-10 lg:justify-start lg:items-start">
					<span className="text-4xl lg:text-7xl items-center flex flex-col">
						<span className="px-5 max-w-xl">
							<Typewriter cursor loop={1} words={['ANDY WIJAYA NUSANTARA.']} />
						</span>
					</span>
					<span className="flex flex-col justify-center gap-10 items-center">
						<p className="text-center lg:max-w-lg">
							Hi! Im Andy, a Front-End Developer based in Indonesia. Creating
							user-friendly web interfaces with modern tools like React.js and
							Next.js. I combine design and performance to deliver impactful
							digital experiences.
						</p>
						<motion.div whileHover={{ scale: 1.1 }}>
							<Link
								href="#shelf"
								className="h-10 border-2 w-fit gap-2 flex justify-center items-center rounded-sm p-2"
							>
								<p>See what i&apos;ve done</p>
								<Icon icon="hugeicons:link-backward" />
							</Link>
						</motion.div>
					</span>
				</div>
			</div>
		</div>
	)
}

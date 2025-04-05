import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Link from 'next/link'

type WorkType = {
	time: string
	title: string
	link?: string
	desc: string
	builtWith: string[]
}

const work: WorkType[] = [
	{
		time: 'Aug 2024 - Dec 2024',
		title: 'Web-based Inventory Application',
		link: 'https://nusantara-inventory-swart.vercel.app/',
		desc: "A web-based inventory application that i've built for my thesis.",
		builtWith: ['Next.js', 'Next UI', 'Tailwind CSS', 'Postman', 'Mongo DB']
	},
	{
		time: 'Feb 2024 - Dec 2024',
		title: 'REGLA 2.0',
		link: 'https://www.youtube.com/watch?v=dcL2noV-dQ0',
		desc: "A web-based Automation Regulatory Compliance application developed by NTT Data where i've been intern with.",
		builtWith: ['Next.js', 'Next UI', 'Tailwind CSS']
	},
	{
		time: '2022 - 2023',
		title: 'Recipedia',
		desc: 'A mobile-based application that can store and share recipe.',
		builtWith: ['Dart', 'Flutter', 'Firebase']
	},
	{
		time: '2022 - 2023',
		title: 'Travela',
		link: 'https://travela.vercel.app/',
		desc: 'My first static web-based travel application.',
		builtWith: [
			'PHP',
			'HTML5',
			'Vanilla CSS',
			'JavaScript',
			'MySQL',
			'phpMyAdmin'
		]
	}
]

export default function Shelf() {
	return (
		<div
			id="shelf"
			className="w-full flex justify-center items-center min-h-screen h-full"
		>
			<div className="max-w-sm md:max-w-2xl flex flex-col gap-5">
				{work.map((item, index) => (
					<div key={index} className="grid grid-cols-3 gap-5 justify-center">
						<div className="flex justify-end min-w-fit">
							<h2>{item.time}</h2>
						</div>
						<div className="col-span-2 flex flex-col gap-2">
							{item.link ? (
								<Link href={item.link} target="_blank">
									<h2 className="hover:underline">
										{item.title}
										<Icon icon="eva:external-link-fill" className="ml-2" />
									</h2>
								</Link>
							) : (
								<h2>{item.title}</h2>
							)}
							<h3 className="text-sm opacity-75">{item.desc}</h3>
							<div className="flex flex-wrap gap-1 text-sm opacity-75 items-center">
								{item.builtWith.map((tool, index) => {
									if (index + 1 === item.builtWith.length)
										return <h4 key={index}>{tool}</h4>
									return (
										<span key={index} className="flex gap-1 items-center">
											<h4>{tool}</h4>
											<Icon icon="icon-park-outline:dot" />
										</span>
									)
								})}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

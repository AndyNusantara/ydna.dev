import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Link from 'next/link'

const contact = [
	{
		icon: 'mdi:linkedin',
		link: 'https://www.linkedin.com/in/andy-nusantara/'
	},
	{
		icon: 'mdi:github',
		link: 'https://github.com/AndyNusantara'
	},
	{
		icon: 'mdi:instagram',
		link: 'https://www.instagram.com/andynusantaraa/'
	},
	{
		icon: 'ic:baseline-email',
		link: 'https://mail.google.com/mail/?view=cm&fs=1&to=andynusantara.work@gmail.com&body=Hi Andy!'
	}
]

export default function Footer() {
	return (
		<div className="w-full mt-5 mb-1 flex justify-center items-center">
			<div className="max-w-sm md:max-w-2xl w-full flex flex-col justify-center items-center">
				<span className="flex items-center justify-center">
					<h2>Feel free to contact me!</h2>
					<Icon icon="lets-icons:down" size={30} />
				</span>
				<span className="w-full h-0.5 bg-foreground"></span>
				<div className="w-full p-2 flex justify-center items-center gap-5">
					{contact.map((item, index) => (
						<Link href={item.link} key={index} target="_blank">
							<Icon icon={item.icon} width={30} />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

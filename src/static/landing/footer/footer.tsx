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
		<div className="w-full flex justify-center items-center flex-col">
			<span className="flex items-center justify-center">
				<h1>Feel free to contact me!</h1>
				<Icon icon="lets-icons:down" size={30} />
			</span>
			<div className="border-opacity-50 max-w-3xl flex justify-center p-2 items-center gap-5 w-full border-t-2">
				{contact.map((item, index) => (
					<Link href={item.link} key={index} target="_blank">
						<Icon icon={item.icon} width={30} />
					</Link>
				))}
			</div>
		</div>
	)
}

import ShelfComponent from './shelf.component'

export type ShelfComponentType = {
	time: string
	title: string
	position?: string
	link?: string
	desc: string
	builtWith: string[]
}

const experience: ShelfComponentType[] = [
	{
		time: 'Feb 2024 - Dec 2024',
		title: 'NTT Data, inc.',
		position: 'Front-end Developer',
		link: 'https://www.youtube.com/watch?v=dcL2noV-dQ0',
		desc: "Contributed to REGLA, NTT Data's flagship regulatory automation solution for financial institutions",
		builtWith: ['Next.js', 'Next UI', 'Tailwind CSS']
	}
]

const projects: ShelfComponentType[] = [
	{
		time: 'Aug 2024 - Dec 2024',
		title: 'Web-based Inventory Application',
		link: 'https://nusantara-inventory-swart.vercel.app/',
		desc: "A web-based inventory application that i've built for my thesis.",
		builtWith: ['Next.js', 'Next UI', 'Tailwind CSS', 'Postman', 'Mongo DB']
	},
	{
		time: '2022 - 2023',
		title: 'Recipedia',
		desc: 'A mobile-based application that can store and share recipe.',
		builtWith: ['Dart', 'Flutter', 'Firebase']
	},
	{
		time: 'May 2025 - June 2025',
		title: 'Typing!',
		link: 'https://typing-gameee.vercel.app/',
		desc: 'Typing! is a typing test application to measure and improve your keyboard skills.',
		builtWith: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux']
	},
	{
		time: 'October 2025 - November 2025',
		title: 'Code Vault',
		link: 'https://code-vault.vercel.app/',
		desc: 'A code snippet manager for developers. Features real-time syntax highlighting, smart search, favorites system, and responsive design.',
		builtWith: ['Vue 3', 'Vuetify', 'Pinia']
	}
]

const Shelf = () => {
	return (
		<div
			id="shelf"
			className="w-full min-h-screen h-full flex flex-col gap-10 justify-center items-center"
		>
			<div className="max-w-sm md:max-w-2xl flex flex-col gap-5">
				<span className="w-full flex justify-center">
					<h1>Experience</h1>
				</span>
				<ShelfComponent data={experience} />
				<span className="w-full h-0.5 bg-foreground"></span>
				<span className="w-full flex justify-center">
					<h1>Projects</h1>
				</span>
				<ShelfComponent data={projects} />
			</div>
		</div>
	)
}

export default Shelf

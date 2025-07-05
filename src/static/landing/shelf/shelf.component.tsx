import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Link from 'next/link'
import { ShelfComponentType } from './shelf'

type ShelfComponentPropsType = {
	data: ShelfComponentType[]
}

const ShelfComponent: React.FC<ShelfComponentPropsType> = ({ data }) => {
	return (
		<div className="flex flex-col gap-10">
			{data.map((item, index) => (
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
						<h2>{item.position}</h2>
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
	)
}

export default ShelfComponent

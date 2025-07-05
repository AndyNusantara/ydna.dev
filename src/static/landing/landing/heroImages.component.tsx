import Image from 'next/image'

const HeroImage = ({ image }: { image: string }) => {
	return (
		<div className="rounded-full overflow-hidden size-[200px] lg:size-[300px] relative">
			<Image src={image} alt="hero-image" fill className="object-cover" />
		</div>
	)
}

export default HeroImage

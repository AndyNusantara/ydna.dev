import Footer from '@/static/landing/footer/footer'
import Landing from '@/static/landing/landing/landing'
import Shelf from '@/static/landing/shelf/shelf'

export default function Home() {
	return (
		<div className="mx-2">
			<Landing />
			<Shelf />
			<Footer />
		</div>
	)
}

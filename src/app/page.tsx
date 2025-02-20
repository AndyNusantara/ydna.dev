'use client'

import CircleIndicator from '@/components/circle_indicator/circle.indicator'
import Footer from '@/static/landing/footer/footer'
import Landing from '@/static/landing/landing/landing'
import Shelf from '@/static/landing/shelf/shelf'

export default function Home() {
	return (
		<div className="mx-2 w-full h-full ">
			<CircleIndicator place="bottom-right" />
			<Landing />
			<Shelf />
			<Footer />
		</div>
	)
}

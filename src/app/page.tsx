'use client'

import CircleIndicator from '@/components/circle_indicator/circle.indicator'
import Footer from '@/static/landing/footer/footer'
import Landing from '@/static/landing/landing/landing'
import Shelf from '@/static/landing/shelf/shelf'

export default function Home() {
	return (
		<div className="w-screen h-full px-5">
			<CircleIndicator place="bottom-right" />
			<Landing />
			<Shelf />
			<Footer />
		</div>
	)
}

import type { Metadata } from 'next'
import { Jersey_15, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/navigation.component'

const jersey15 = Jersey_15({
	weight: '400',
	variable: '--font-jersey-15',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'YDNA.dev',
	description: 'Andy Wijaya Nusantara Portfolio'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${jersey15.variable} ${geistMono.className} antialiased`}
			>
				<Navigation />
				{children}
			</body>
		</html>
	)
}

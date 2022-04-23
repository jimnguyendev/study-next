import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export interface AboutProps {}

export default function About(props: AboutProps) {
	const router = useRouter()

	useEffect(() => {
		// check query available
	}, [])

	return <div>About Page</div>
}

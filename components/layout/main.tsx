import React from 'react'
import { LaypoutProps } from '@/models/index'
import Link from 'next/link'

export interface IMainLayoutProps {}

export function MainLayout(props: LaypoutProps) {
	return (
		<div>
			<h1>main Layout</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</div>
	)
}

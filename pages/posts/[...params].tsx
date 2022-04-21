import { useRouter } from 'next/router'
import * as React from 'react'

export interface ParamDetailPageProps {}

export default function ParamDetailPage(props: ParamDetailPageProps) {
	const router = useRouter()

	return (
		<div>
			<h1>Post Detail page</h1>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	)
}

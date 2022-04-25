import * as React from 'react'

export interface CreatePostPageProps {}

export default function CreatePostPage(props: CreatePostPageProps) {
	return <div>Create Post Page</div>
}

// export async function getServerSideProps() {
// 	await new Promise((resolve) => setTimeout(resolve, 3000))
//
// 	return {
// 		props: {},
// 	}
// }

export function getServerSideProps() {
	return {
		props: {},
	}
}

import * as React from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'

export interface PostListProps {
	posts: Post[]
}

interface Post {
	id: number
	title: string
}

export default function PostList({ posts }: PostListProps) {
	return (
		<>
			<div>Post list page</div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}
					</li>
				))}
			</ul>
		</>
	)
}

export const getStaticProps: GetStaticProps<PostListProps> = async (
	context: GetStaticPropsContext
) => {
	// server side
	// build-time
	console.log('static props')
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts = await res.json()

	return {
		props: {
			posts: posts.map((post: Post) => ({ id: post.id, title: post.title })),
		},
	}
}

import type { PostsResponse } from "~/types/PostsResponse";
export default defineEventHandler(async (event): Promise<PostsResponse> => {
	const prisma = usePrisma();

	try {
		const blogs = await prisma.blog.findMany();

		const serializedBlogs = blogs.map((blog) => ({
			...blog,
			updatedAt: blog.updatedAt.toISOString(),
			createdAt: blog.createdAt.toISOString(),
		}));

		return {
			statusCode: 200,
			body: serializedBlogs,
		};
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Internal Server Error",
		});
	}
});

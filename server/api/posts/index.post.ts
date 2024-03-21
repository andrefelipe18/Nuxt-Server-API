export default defineEventHandler(async (event) => {
	const prisma = usePrisma();
	try {
		const body = await readBody(event);
		const { title, content } = body;

		const blog = await prisma.blog.create({
			data: {
				title,
				content,
			},
		});

		return {
			statusCode: 200,
			body: blog,
		};
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Internal Server Error",
		});
	}
});

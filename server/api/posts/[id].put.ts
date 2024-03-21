export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id") || "0");

	const prisma = usePrisma();

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: "Bad Request",
		});
	}

	try {
		const body = await readBody(event);
		const { title, content } = body;

		const blog = await prisma.blog.update({
			where: {
				id,
			},
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

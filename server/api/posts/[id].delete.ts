export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id"));

	const prisma = usePrisma();

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: "Bad Request",
		});
	}

	try {
		const blog = await prisma.blog.delete({
			where: {
				id,
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

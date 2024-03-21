export default defineEventHandler(async (event) => {
	const id = parseInt(getRouterParam(event, "id"));

	let prisma = usePrisma();

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: "Bad Request",
		});
	}

	try {
		const blog = await prisma.blog.findUnique({
			where: {
				id,
			},
		});

		return {
			statusCode: 200,
			body: blog,
		};
	} catch (error) {
		console.log(error);
		throw createError({
			statusCode: 500,
			statusMessage: "Internal Server Error",
		});
	}
});

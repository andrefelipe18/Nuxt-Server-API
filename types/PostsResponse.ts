import type { Blog } from "@prisma/client";
export type SerializedBlog = Omit<Blog, "updatedAt" | "createdAt"> & {
	updatedAt: string;
	createdAt: string;
};

export type PostsResponse = {
	statusCode: number;
	body: SerializedBlog[] | SerializedBlog;
};

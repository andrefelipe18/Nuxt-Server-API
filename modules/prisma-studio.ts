import { defineNuxtModule } from "@nuxt/kit";
import { addCustomTab, startSubprocess } from "@nuxt/devtools-kit";

export default defineNuxtModule({
	meta: {
		name: "prisma-studio",
	},

	setup(options, nuxt) {
		if (!nuxt.options.dev) {
			return;
		}

		addCustomTab({
			name: "prisma-studio",
			icon: "skill-icons:prisma",
			title: "Prisma Studio",
			view: {
				type: "iframe",
				src: "http://localhost:5555/",
			},
		});
	},
});

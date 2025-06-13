import { IRoute } from "@/types/routes"
import { lazy } from "react"

const HomePage = lazy(() => import("@/pages/HomePage"))

class RouterConfig {
	routes: IRoute[] = [
		{
			path: "/amino-aligner",
			component: <HomePage />,
			slug: "home",
		},
	]

	getRouteBySlug(slug: string) {
		return this.routes.find(route => route.slug === slug)
	}
}

export const routerConfig = new RouterConfig()


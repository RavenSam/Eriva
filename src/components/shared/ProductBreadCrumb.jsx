import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
} from "@chakra-ui/react";
import { ChevronRightOutline } from "heroicons-react"

export default function ProductBreadCrumb({ category }) {
	return (
		<Breadcrumb spacing="2px" separator={<ChevronRightOutline color="gray.500" />}>
			<BreadcrumbItem>
				<BreadcrumbLink href="#">Product</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem>
				<BreadcrumbLink href="#">Category</BreadcrumbLink>
			</BreadcrumbItem>

			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink href="#">{category}</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
}

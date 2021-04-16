import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
} from "@chakra-ui/react";

export default function ProductBreadCrumb({ category }) {
	return (
		<Breadcrumb spacing="2px" fontSize="13px">
			<BreadcrumbItem>
				<BreadcrumbLink href="#" >Product</BreadcrumbLink>
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

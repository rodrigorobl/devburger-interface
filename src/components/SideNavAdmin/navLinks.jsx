import { House, List, ListPlus, Package, Receipt, ShoppingBagOpen } from "@phosphor-icons/react";

export const navLinks = [
	{
		id: 1,
		label: "Página Principal",
		path: "/",
		icon: <House size={24} />,
	},
	{
		id: 2,
		label: "Pedidos",
		path: "/admin/pedidos",
		icon: <Receipt />,
	},
	{
		id: 3,
		label: "Produtos",
		path: "/admin/produtos",
		icon: <List />,
	},
	{
		id: 4,
		label: "Adicionar Produto",
		path: "/admin/novo-produto",
		icon: <ListPlus />,
	},
	{
		id: 5,
		label: "Todos os Produtos",
		path: "/produtos",
		icon: <Package size={24} />,
	},
	{
		id: 6,
		label: "Carrinho",
		path: "/carrinho",
		icon: <ShoppingBagOpen size={24} />,
	},
];

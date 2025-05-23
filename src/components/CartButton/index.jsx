import Cart from "../../assets/cart.svg";
import { ContainerButton } from "./styles";

export function CartButton({ children, ...props }) {
	return (
		<ContainerButton {...props}>
			<img src={Cart} alt="carrinho-de-compras" style={{ width: '20px', height: '20px' }} />
			{children}
		</ContainerButton>
	);
}

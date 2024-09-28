import Logo from '../../assets/logo.svg';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>
      <Title>Checkout - Pedido </Title>
      <Content>
        {/*<CartItems />*/}
        {/*<Cartresume />*/}
      </Content>
    </Container>
  );
}

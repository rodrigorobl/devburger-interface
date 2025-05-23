import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";
import { Container, Main } from "./styles";

export function UserLayout(){
    return (
        <Container>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </Container>
    )
}
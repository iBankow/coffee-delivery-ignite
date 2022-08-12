import { NavLink } from "react-router-dom"
import { EmptyCartButton, HeaderContainer, LocationSpan } from "./styles"
import logo from "../../assets/coffeLogo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";


const Header = () => {
    return (
        <HeaderContainer changeColor={false} >
            <nav>
                <NavLink to="/" title="Home">
                    <img src={logo} alt="Coffee Delivery Logo" />
                </NavLink>

                <div>
                    <LocationSpan>
                        <MapPin size={22} weight="fill" />
                        <p> Porto Alegre, RS </p>
                    </LocationSpan>

                    <NavLink to="/cart" title="Cart">
                        <EmptyCartButton colorScheme={`yellow`} >
                            <ShoppingCart size={22} weight="fill" />
                        </EmptyCartButton>
                    </NavLink>
                </div>
            </nav>
        </HeaderContainer>
    )
}

export { Header }
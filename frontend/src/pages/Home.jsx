import { ShopsList } from "../components/ShopsList"
import { MedicinesList } from "../components/MedicinesList"
import { Container } from "../components/Container.styled"

export const Home = () => {
    return (
        <Container>
            <ShopsList />
            <MedicinesList />
        </Container>    
    )
}
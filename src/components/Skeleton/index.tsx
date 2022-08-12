import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { SkeletonContainer } from "./styles"

const Skeleton = () => {

    return (
        <>
            <Header />
            <SkeletonContainer>
                <Outlet />
            </SkeletonContainer>
        </>
    )
}

export { Skeleton }
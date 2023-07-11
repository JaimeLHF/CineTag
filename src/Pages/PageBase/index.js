import FavoritosProvider from 'Context/Favoritos'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageBase() {
    return (
        <main>
            <Header />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}

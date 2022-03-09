import React from 'react'
import Hero from '../components/Hero'
import Page from '../components/Page'
import Propiedad from '../components/Propiedad'
import Propiedades from '../components/Propiedades'

export const Home = () => {
  return (
    <Page>
        <Hero/>
        <Propiedades busqueda={false} />
    </Page>
  )
}

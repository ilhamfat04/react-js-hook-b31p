import React, { useState, useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'

import { UserContext } from './context/userContext'

export default function ExampleComp() {
    // const { user } = props

    const [state, dispacth] = useContext(UserContext)
    console.log(state)

    // console.log("Props examplecomp", user?.email);

    // useEffect(() => {
    //     console.log("Example comp did update");
    //     console.log("Data is update");
    //     console.log(user);
    // }, [props])

    return <Container>Email : {state?.user?.email}</Container>
}

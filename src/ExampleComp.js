import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

export default function ExampleComp(props) {
    const { user } = props

    console.log("Props examplecomp", user?.email);
    const [state, setState] = useState(null)

    useEffect(() => {
        console.log("Example comp did update");
        console.log("Data is update");
        console.log(user);
    }, [props])

    return <Container>Email : {props.user.email}</Container>
}

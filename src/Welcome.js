//import useEffect here
import { useEffect, useContext } from "react"

import { Button } from "react-bootstrap"

import { UserContext } from "./context/userContext"

export default function Welcome() {


    // Create DidMount & WillUnmount with useEffect 
    // inside it can print "Welcome Component Did Mount" & "Welcome Component Will Unmount"
    // useEffect(() => {
    //     // console.log("Welcome comp did mount");

    //     return () => {
    //         // console.log("Welcome comp will unmount")
    //     }
    // }, [])

    const [_, dispacth] = useContext(UserContext)

    const handleLogout = () => {
        dispacth({
            type: 'LOGOUT'
        })
    }


    return (
        <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
            Welcome
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}

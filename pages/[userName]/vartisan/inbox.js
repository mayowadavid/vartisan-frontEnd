import { useContext, useEffect } from "react"
import ClientInbox from "../../../components/client-folder/clientInbox"
import { MainContext } from "../../../components/context/mainContext"

const inbox = () => {
    const {setChangeState, vartisanState} = useContext(MainContext);

    useEffect(()=> {
        setChangeState({...vartisanState, message: true});
    }, [])
    
    return (
        <ClientInbox />
    )
}

export default inbox
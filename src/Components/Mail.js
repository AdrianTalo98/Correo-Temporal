import { useEffect, useState } from "react"
import Bandeja from "./Bandeja";


const Mail = (props) =>{

    const [email,setEmail] = useState('');

    const cantidad = props.cantidad;
    const url = 'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count='+cantidad


    useEffect(()=>{
        const obtener = async() => {
            const email = await fetch(url)
            .then(data => data.json())
            .then(resp => setEmail(resp))
        }
        obtener()
    

    },[])

    if(email){
        return(
            <div className="container">
                

                <div>
                    <h1>
                        Bandeja de entrada:
                        
                    </h1>
                    <Bandeja email={email}/>
                </div>
            </div>
        )
    }else{
        return(
            <div>No hay email </div>
        )
    }

    


}

export default Mail;
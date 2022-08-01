import { useEffect, useState } from "react";


const Mensaje = (props) => {
    const data = props.data
    var url = data.url;
    const id = data.id
    url = url+'&id='+id
    const segundo = url.replace('getMessages','readMessage')
    const [final,setFinal] = useState('')
    
    useEffect(()=>{
        const obtener = async() =>{
            await fetch(segundo)
            .then(data => data.json())
            .then(resp => setFinal(resp))
        }
        obtener()
    })



    if(final){
        return(
            <div className="modal-body">
                <strong>Asunto: {final.subject}</strong>
                <div><h1>Mensaje</h1></div>
                <p>{final.textBody}</p>
                
            </div>
        )
    }else{
        return(
            <div>No hay nah</div>
        )
    }
}

export default Mensaje;
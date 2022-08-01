import { useEffect, useState } from "react";
import Leer from "./Leer";
import Mensaje from "./Mensaje";


const Msg = (props) => {

    const [bandeja, setBandeja] = useState('');
    const email = props.email
    const parsear = (email) => {
        const data = email.split("@");
        return (data)

    }

    const parseado = parsear(email);
    const user = parseado[0];
    const domain = parseado[1];



    const url = 'https://www.1secmail.com/api/v1/?action=getMessages&login=' + user + '&domain=' + domain;
    console.log(url)

    useEffect(() => {
        
        setTimeout(()=>{
            const obtener = async () => {
                await fetch(url)
                    .then(data => data.json())
                    .then(resp => setBandeja(resp))
            }
            obtener()
        },5000)

    })



    console.log(bandeja)
    if (bandeja) {
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">From</th>
                        <th scope="col">Asunto</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bandeja.map((val, key) => (

                            <tr>
                                <th scope="row">{key + 1}</th>
                                <td>{val.date}</td>
                                <td>{val.from}</td>
                                <td>{val.subject}</td>
                                <td>
                                    <Leer val={val} key={key} url={url}/>
                                </td>
                                
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        )
    } else {
        return (
            <div>No hay mensajes</div>
        )
    }
}

export default Msg;
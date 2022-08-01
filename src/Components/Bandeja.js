import Msg from "./Msg";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

const Bandeja = (props) => {

    const email = props.email;//array[]   


    return (

        <>
            <div class="accordion" id="accordionExample">
                {
                    email.map((val, key) => (
                        <div class="accordion-item" key={key}>
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    {val}
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Email: {val}</strong>
                                    <CopyToClipboard text={val}>
                                        <button className="btn btn-success ms-5">Copiar correo</button>
                                    </CopyToClipboard>

                                    <Msg email={val} />

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </>
    )
}

export default Bandeja;
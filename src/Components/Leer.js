import Mensaje from "./Mensaje"



const Leer = (props) => {

    const val = props.val
    
    const url = props.url

    console.log("Acaaaa",val)

    const name1 = '#exampleModal'+val.id
    const name2 = 'exampleModal'+val.id
    

    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={name1}>
                Leer
            </button>

            <div class="modal fade" id={name2} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{val.subject}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Mensaje data={{ url: url, id: val.id }} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Leer;
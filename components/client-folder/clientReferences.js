import React from 'react'

const ClientReference = ({handlePop, clientReference}) => {
    console.log(clientReference);
  return (
    <div className="client_reference_wrapper flex_show_row">
    {
        clientReference.length > 0 && clientReference.map(({name, description, file})=>{
            return(
                <div className="references_card_container">
                    <div className="reference_card_change hide">
                        <img src="svg/Setting.svg" alt=""/>
                    </div>
                    <img src={file!== null ? file.image :"img/category.png"} alt=""/>
                    <div className="reference_card_content remove_margin">
                        <p>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>
            )
        })
    }
        <div onClick={handlePop} className="client_album_holder remove_margin flex_show_column">
            <img src="img/plus.png" alt=""/>
            <p>Create new album</p>
        </div>
    </div>
  )
}

export default ClientReference
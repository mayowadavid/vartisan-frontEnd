import React from 'react'

const ClientReference = ({handlePop}) => {
  return (
    <div className="client_reference_wrapper flex_show_row">
        <div className="references_card_container">
            <div className="reference_card_change hide">
                <img src="svg/Setting.svg" alt=""/>
            </div>
            <img src="img/category.png" alt=""/>
            <div className="reference_card_content remove_margin">
                <p>Illustration bunny</p>
                <p>Lorem, ipsum dolor sit amet con..</p>
            </div>
        </div>
        <div onClick={handlePop} className="client_album_holder remove_margin flex_show_column">
            <img src="img/plus.png" alt=""/>
            <p>Create new album</p>
        </div>
    </div>
  )
}

export default ClientReference
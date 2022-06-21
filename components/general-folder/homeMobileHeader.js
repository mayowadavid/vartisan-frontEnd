import React, { useContext } from 'react'
import { MainContext } from '../context/mainContext'

export default function HomeMobileHeader() {
  const { handleMenu } = useContext(MainContext);
  return (
    <div className="mobile_header flex_show_row">
        <div className="mobile_logo_holder flex_show_row">
            <img src="img/v_large 1.png" alt="" />
            <p>Vartisan</p>
        </div>
        <div onClick={handleMenu} className="mobile_menu_bar">
            <img src="img/menu_bar.png" alt="" />
        </div>
    </div>
  )
}

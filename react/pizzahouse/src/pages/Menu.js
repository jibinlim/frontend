import React from "react"
import {MenuList} from '../sub/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/style/Menu.css'

const Menu = () => {
    return ( 
        <div className ="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {
                    MenuList.map((menuitem,key)=>{
                        return <MenuItem 
                        image={menuitem.image}
                        name={menuitem.name} 
                        price = {menuitem.price}/>
                    })
                }
            </div>
        </div>
     )
}
 
export default Menu;
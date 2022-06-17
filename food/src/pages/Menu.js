import React from 'react';
import Menuitem from '../components/Menuitem';
import { Data } from '../Data/Data';
import '../styles/Menu.css'


function Menu() {
    return (
        <div className='menu'>
            <div className = 'menuTitle'>
                <div className = 'menuList'>
                  {Data.map((menuItem,key) =>{ 
                    return (<Menuitem 
                        key={key} 
                        image={menuItem.image} 
                        name={menuItem.name} 
                        price = {menuItem.price} />)
                  })}
                </div>
            </div>
        </div>
      );
}

export default Menu;
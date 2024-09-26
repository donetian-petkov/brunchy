import {MenuItem} from "./MenuItem/MenuItem";
import {useEffect, useState} from "react";

export const MenuList = () => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {

        fetch('/data/data.json')
            .then(res => res.json())
            .then(data => setMenuItems(Object.values(data)[0]))
            .catch(err => console.log(err))

    },[])

    return (
        <div>
            {
                menuItems.map(item => <MenuItem key={item.name} item={item}/>)
            }
        </div>
    )
}
import {MenuItem} from "./MenuItem/MenuItem";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles (if used)
import 'swiper/css/pagination';
import {Autoplay, HashNavigation, Mousewheel, Navigation, Pagination} from "swiper/modules"; // Pagination module styles (if used)
import styles from './MenuList.module.sass';

export const MenuList = (
    {setCart}
) => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {

        fetch('/data/data.json')
            .then(res => res.json())
            .then(data => setMenuItems(Object.values(data)[0]))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className={styles.productList}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={150}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    grabCursor={true}
                    className="mySwiper"
                >
                    {
                        menuItems.map((item) => {
                            return <SwiperSlide key={item.name}>
                                <img className={styles.productImg} src={`/images/${item.image}`} alt={item.name}/>
                                <MenuItem key={item.name} item={item} setCart={setCart}/>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
        </div>
    )
}
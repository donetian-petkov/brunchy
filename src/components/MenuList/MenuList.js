import {MenuItem} from "./MenuItem/MenuItem";
import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles (if used)
import 'swiper/css/pagination';
import {Mousewheel} from "swiper/modules"; // Pagination module styles (if used)
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
                        250: {
                            slidesPerView: 1,
                        },
                        430: {
                            slidesPerView: 2,
                        },
                        544: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1246: {
                            slidesPerView: 4,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 0
                        },
                    }}
                    mousewheel={true}
                    modules={[Mousewheel]}
                    grabCursor={true}
                    className="mySwiper"
                >
                    {
                        menuItems.map((item) => {
                            return <SwiperSlide key={item.name} className={styles.productSlide}>
                                <MenuItem key={item.name} item={item} setCart={setCart}/>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
        </div>
    )
}
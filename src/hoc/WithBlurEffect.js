import {useEffect, useState} from "react";

export const WithBlurEffect = ({
                                    isCheckout,
                                    setIsCheckout,
                                    setIsOrdered,
                                    children
                                }) => {

    const [blurCLass, setBlurClass] = useState("");


    useEffect(() => {
        if (isCheckout) {
            setBlurClass("blurred");
        } else {
            setBlurClass("");
        }
    }, [isCheckout]);
    return (
        <div className={blurCLass} onClick={() => {
            setIsCheckout(false);
            setIsOrdered(false);
        }}>
            {children}
        </div>
    );
};
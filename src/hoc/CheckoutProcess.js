import {useEffect, useState} from "react";

export const CheckoutProcess = ({ isCheckout, setIsCheckout, children }) => {

    const [blurCLass, setBlurClass] = useState("");

    useEffect(() => {
        if (isCheckout) {
            console.log("isCheckout", isCheckout);
            setBlurClass("blurred");
        } else {
            setBlurClass("");
        }
    }, [isCheckout]);
    return (
        <div className={blurCLass} onClick={() => setIsCheckout(false)}>
            {children}
        </div>
    );
};
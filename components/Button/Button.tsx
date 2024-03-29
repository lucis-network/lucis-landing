import { Button, ButtonProps } from "antd";
import React from "react";
import s from "./button.module.sass";

type IProps = ButtonProps & {
    width?: number;
    height?: number;
}
const ButtonWrapper = (props: IProps) => {
    const width = props?.width ?? 88;
    const height = props?.height ?? 28;
    return (
        //<div className={s.lucisButton} style={{ width: width, height: height }}>
        <Button
            {...props}
            className={`${s.customCss} ${props?.className ?? ""} ant-btn-default`}
            style={{
                ...props.style,
                minWidth: width,
                maxWidth: width,
                minHeight: height,
                // maxHeight: height,
                lineHeight: `${height}px`
            }} />
        //</div >
    )
}

export default ButtonWrapper;
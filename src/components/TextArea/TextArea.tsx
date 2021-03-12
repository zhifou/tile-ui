/**
 * @file TextArea组件
 * @author zhifou(zhifou80@163.com)
 */
 import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
 import classNames from "classnames";
 
 export type TextAreaSize = "lg" | "sm";
 
 interface BaseTextAreaProps {
     className?: string;
     disabled?: boolean;
     size?: TextAreaSize;
     children: React.ReactNode;
     minLen?: number;
     maxLen?: number;
     readOnly?: boolean;
     onChange: () => {}
 }
 
//  type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
//  type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
 
 export type TextAreaProps = Partial<BaseTextAreaProps>;
 
 export const TextArea: FC<TextAreaProps> = (props) => {
     const {
         btnType,
         className,
         disabled,
         size,
         children,
         href,
         ...restProps
     } = props;
 
     const classes = classNames('btn', className, {
         [`btn-${btnType}`]: btnType,
         [`btn-${size}`]: size,
         disabled: btnType === 'link' && disabled
     });
 
     return (
        <div className="">
            <textarea data-type="textarea" />
        </div>
    );
 };
 
 TextArea.defaultProps = {
     disabled: false
 };
 
 export default TextArea;
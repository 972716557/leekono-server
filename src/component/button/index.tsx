import { FC } from "react";
import { Button, ButtonProps } from "antd";
// import { Link } from "umi";
import classNames from "classnames";
import "./index.css";
import Link from "next/link";

const prefix = "header-button";

interface HeaderButtonProps extends ButtonProps {
  // 跳转链接
  url: string;
  // 当前链接是否匹配
  isActive: boolean;
}
const HeaderButton: FC<HeaderButtonProps> = ({
  url,
  children,
  className,
  isActive,
  ...rest
}) => {
  const buttonClass = classNames(
    className,
    prefix,
    isActive && `${prefix}-active`
  );
  return (
    <Link href={url}>
      <Button className={buttonClass} {...rest}>
        {children}
      </Button>
    </Link>
  );
};

export default HeaderButton;

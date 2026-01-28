declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    spy?: boolean;
    hashSpy?: boolean;
    isDynamic?: boolean;
    ignoreCancelEvents?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    onClick?: (event: React.MouseEvent<any>) => void;
    className?: string;
    activeClass?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const Link: React.FC<LinkProps>;

  export interface ElementProps {
    name: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export const Element: React.FC<ElementProps>;
}

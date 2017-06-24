import React from "react";
import cn from "classnames";

export const Button = ({
  text,
  working,
  sizeClass,
  colourClass,
  onClick,
}) => (
  <button
    className={cn("Button",
                 `Button--${sizeClass}`,
                 `Button--${colourClass}`,
                 { [`Button--${colourClass}--${working}`]: working }
    )}
    onClick={onClick}
  >
    <div className="Button__inner">
      {text}
    </div>
  </button>
);

export default Button;

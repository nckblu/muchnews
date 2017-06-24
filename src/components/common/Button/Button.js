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
                { "Button--working": working },
                  `Button--${sizeClass}`,
                  `Button--${colourClass}`,
               { [`Button--${colourClass}--working`]: working }
    )}
    onClick={onClick}
  >
    <div className={cn("Button__inner", { "Button__inner--working": working })}>
      {text}
    </div>
  </button>
);

export default Button;

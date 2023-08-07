import { useState } from "react";
import { Button } from "../atom/button";
import { Ul } from "../atom/ul";
import { Li } from "../atom/li";
export interface SelectProps {
  children: React.ReactNode;
  menu: React.ReactNode[];
}
export const Select = ({ menu, ...props }: SelectProps) => {
  const [state, setState] = useState();
  return (
    <>
      <Button {...props} />
      <Ul>
        {menu.map((e) => (
          <>
            <Li>{e}</Li>
          </>
        ))}
      </Ul>
    </>
  );
};

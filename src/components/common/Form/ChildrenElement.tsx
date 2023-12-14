import React, { JSX } from 'react';

type Props = {
  children: JSX.Element | JSX.Element[];
};
//https://react-hook-form.com/advanced-usage#SmartFormComponent
const ChildrenElement = ({ children }: Props) => {
  return (
    <>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                //register: methods.register, //we will get register from the form context
                // a problem occurs when we passing register here
                key: child.props.name,
              },
            })
          : child;
      })}
    </>
  );
};

export default ChildrenElement;

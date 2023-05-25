import React from 'react'


interface ICustomButton {
    className?: string;
    children: React.ReactNode;
  }

 const CustomButton: React.FC<ICustomButton> = ({
    className,
    children,
  }) => {
    return (
      <button
        className={`py-2.5 w-full rounded text-white font-medium ${className}`}
      >
        {children}
      </button>
    );
  };

export default CustomButton
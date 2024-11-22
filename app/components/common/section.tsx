import React, { ReactNode } from "react";

const Section = ({
    children,
    className,
    id
}: {
    children: ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <div
            id={id}
            className={`5xl:max-w-[1800px] 2xl:px-24 lg:px-16 mx-auto px-5 py-5 ${className || ""
                }`}
        >
            {children}
        </div>
    );
};

export default Section;
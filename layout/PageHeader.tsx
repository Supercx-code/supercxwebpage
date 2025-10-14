import React from "react";
import HeadingText from "../components/HeadingText";
import BgImage from "../public/headerbg.svg";

const PageHeader = ({ children }: { children: string }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${BgImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="p-10 rounded-2xl text-center"
        >
            <HeadingText>
                <>
                    {children}
                </>
            </HeadingText>
        </div>
    );
};

export default PageHeader;

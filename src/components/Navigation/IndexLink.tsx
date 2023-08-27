import React from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";

interface Props {
    title?: string;
    description?: string;
    to?: string;
}

export default function IndexLink(props: Props) {
    const colorMode = useColorMode();
    const [isDark, setIsDark] = React.useState(colorMode.isDarkTheme);

    React.useEffect(() => {
        setIsDark(colorMode.isDarkTheme);
    }, [colorMode]);

    return (
        <Link
            to={props.to}
            target="_self"
            className="flex flex-col gap-2 w-full py-3 px-4 text-lg font-bold bg-zinc-500/20 rounded-md hover:bg-zinc-400/20 outline-1 outline-purple-500 hover:outline transition-all ease-linear duration-100"
            style={{
                textDecoration: "none",
            }}
        >
            <span className={isDark ? "text-white" : "text-zinc-600"}>
                {props.title}
            </span>
            {props.description && (
                <span
                    className={`${
                        isDark ? "text-white" : "text-zinc-600"
                    } text-sm font-normal`}
                >
                    {props.description}
                </span>
            )}
        </Link>
    );
}
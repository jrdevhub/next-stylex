"use client";

import { useEffect, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import Progress from "@/components/UI/Progress/Progress";
import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./RouteChangeProgress.stylex";

const RouteChangeProgress = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [isPending] = useTransition();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return loading || isPending ? (
        <div {...stylex.props(baseStyles.progressBar)}>
            <Progress variant="bar" />
        </div>
    ) : null;
};

export default RouteChangeProgress;

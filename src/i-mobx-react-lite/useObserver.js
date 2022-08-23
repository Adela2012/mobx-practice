import React, { useRef, useReducer, useEffect } from "react";
import { Reaction } from "mobx";
import { useForceUpdate } from "./utils";

function observerComponentNameFor(baseComponentName) {
    return `observer${baseComponentName}`;
}

export function useObserver(fn, baseComponentName = "observed", options = {}) {

    const forceUpdate = (options.useForceUpdate || useForceUpdate)()

    const reactionTrackingRef = useRef(null)

    if (!reactionTrackingRef.current) {
        reactionTrackingRef.current = {
            reaction: new Reaction(observerComponentNameFor(baseComponentName), () => {
                forceUpdate()
            })
        }
    }

    const { reaction } = reactionTrackingRef.current
    useEffect(() => {
        return () => {
            // 清理reaction
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);

    let rendering;

   

    reaction.track(() => {
        rendering = fn();

    })


    return rendering;
}

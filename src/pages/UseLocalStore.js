
import React from "react";
import {
    useLocalStore,
    useObserver,
    // useAsObservableSource
} from "mobx-react";
import { useAsObservableSource } from "../i-mobx-react-lite/";

function UseLocalStore(props) {
    const newProps = useAsObservableSource(props);
    console.log(newProps);
    const countStore = useLocalStore(
        () => ({
            count: props.init === undefined ? 0 : props.init,
            add() {
                this.count = this.count + 1;
            },
            done: false,
            toggle() {
                this.done = !this.done
            },
            get emoji() {
                return this.count % 2 ? "😜" : "🏃";
            },
            get specialNum() {
                return newProps.init > -1 && newProps.init < 10
                    ? "0" + newProps.init
                    : newProps.init;
            }
        }),
        props
    );
    const { count } = countStore
    console.log(111);
    return useObserver(() => (
        <div className="border">
            <h3>UseLocalStore{countStore.emoji}</h3>
            <p>{countStore.specialNum}</p>
            <button onClick={countStore.add}>count: {countStore.count}, {count}</button>
            <button onClick={countStore.toggle}>done: {countStore.done + ''}</button>

        </div>
    ));
}
export default UseLocalStore;

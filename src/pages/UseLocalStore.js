
import React from "react";
import { useLocalStore, useObserver } from "mobx-react";

function UseLocalStore(props) {
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
            }
        }),
        props
    );
    const { count } = countStore
    console.log(111);
    return useObserver(() => (
        <div className="border">
            <h3>UseLocalStore{countStore.emoji}</h3>
            <button onClick={countStore.add}>count: {countStore.count}, {count}</button>
            <button onClick={countStore.toggle}>done: {countStore.done + ''}</button>

        </div>
    ));
}
export default UseLocalStore;

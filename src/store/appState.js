import { observable, action } from "mobx";

const appState = observable({
    timer: 0
})

appState.addTimer = action(() => {
    appState.timer++
})

export default appState
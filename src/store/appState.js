import { observable, action } from "mobx";

const appState = observable({
    timer: 0
})

appState.addTimer = action(() => {
    appState.timer++
})

appState.resetTimer = action(() => {
    appState.timer = 0
})

// setInterval(action(() => {
//     appState.timer++
// }), 1000)

export default appState
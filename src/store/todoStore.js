
import { observable, configure, action, computed, autorun } from "mobx";

configure({ enforceActions: "observed" });


class TodoStore {
    @observable todos = [
        {
            id: "0",
            // 标记任务是否完成
            finished: false,
            // 定义任务名
            title: "任务1"
        },
        {
            id: "1",
            // 标记任务是否完成
            finished: true,
            // 定义任务名
            title: "任务2"
        },
        {
            id: "2",
            // 标记任务是否完成
            finished: false,
            // 定义任务名
            title: "任务3"
        }
    ];

    @computed get unfinishedCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action change(todo, todos) {
        console.log("🚀 ~ file: todoStore.js ~ line 37 ~ TodoStore ~ @actionchange ~ todo", todo, todos)
        todo.finished = !todo.finished;
    }
}

const todoStore = new TodoStore();

autorun(() => {
    console.log("剩余任务：" + todoStore.unfinishedCount + "个"); //sy-log
});

// setInterval(action(() => {
//     console.log(todoStore.todos,1, todoStore.todos[0].finished);
//     todoStore.todos[0].finished = !todoStore.todos[0].finished
// }), 1000)

export default todoStore;


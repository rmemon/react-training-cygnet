import { takeLatest, call, put } from "@redux-saga/core/effects";
import Axios from "axios";

const url = 'https://todo-node-cygnet-training.herokuapp.com/';

function* addTodo(action) {

    let response = yield call(function () {
        return Axios.post(url, {
            title: action.text
        })
    });

    yield put({ type: "ADD_TODO_DONE", todo: response.data.todo })
    console.log(response);


}
function getfromAxios() {
    return Axios.get(url);
}
function* getTodos(action) {
    let response = yield call(getfromAxios);
    console.log(response.data.todos);
    yield put({ type: "GET_TODOS_DONE", todos: response.data.todos })
}
export default function* mySaga() {
    yield takeLatest('ADD_TODO', addTodo)
    yield takeLatest('GET_TODOS', getTodos)

}
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import { changeInputValue, addItem, deleteItem } from '../store/actions'
import TodoListUI from './ui/TodoList_ui'

const mapStateToProps = state => {
    return {
        placeholder: "请输入事项",
        list: state.list,
        value: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue: (event) => {
            dispatch(changeInputValue(event))
        },
        add: () => {
            dispatch(addItem())
        },
        delete: (index) => {
            dispatch(deleteItem(index))
        }
    }
}

const ConnectedTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListUI)




export default ConnectedTodoList;
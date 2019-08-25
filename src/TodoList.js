import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = store.getState();
        this.fetchState = this.fetchState.bind(this);
        store.subscribe(this.fetchState);
    }
    render() {
        return (<div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder='请输入事项'
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={this.changeInputValue.bind(this)}
                    value={this.state.inputValue}
                />
                <Button type="primary" onClick={this.add.bind(this)}>增加</Button>
            </div>
            <div style={{width: '320px', marginTop:'10px'}}>   
                <List bordered
                      dataSource={this.state.list}
                      renderItem={(item, index) => 
                      <List.Item style={{display:'flex', justifyContent: 'space-between'}}>
                      {item}
                      <Button type="danger" size="small" onClick={this.delete.bind(this, index)} ghost>删除</Button></List.Item>
                      }
                />
            </div>

        </div>);
    }
    fetchState () {
        this.setState(store.getState());
    }
    changeInputValue(event) {
        const action = {
            type: 'changeInput',
            value: event.target.value
        }
        store.dispatch(action);
        
    }
    add() {
        const action = {
            type: 'addItem'
        }
        store.dispatch(action);
    }
    delete(index) {
        const action = {
            type: 'deleteItem',
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;
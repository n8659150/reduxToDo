import React from 'react';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (<div style={{ margin: '10px' }}>
        <div>
            <Input
                placeholder="请输入事项"
                style={{ width: '250px', marginRight: '10px' }}
                onChange={props.changeInputValue}
                value={props.value}
            />
            <Button type="primary" onClick={props.add}>增加</Button>
        </div>
        <div style={{ width: '320px', marginTop: '10px' }}>
            <List bordered
                dataSource={props.list}
                renderItem={(item, index) =>
                    <List.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {item}
                        <Button type="danger" size="small" onClick={() => { props.delete(index) }} ghost>删除</Button></List.Item>
                }
            />
        </div>

    </div>)
}
export default TodoListUI
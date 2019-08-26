export const changeInputValue = (event) => ({
    type: 'changeInput',
    value: event.target.value
})

export const addItem = () => ({
    type: 'addItem'
})

export const deleteItem = (index) => ({
    type: 'deleteItem',
    index
})
import React, { useState } from 'react'

export const Button = (props) => {

    const { inputValue, setValue, setListItem, listItem } = props;
    function clickHandelr() {
        setListItem([...listItem, inputValue])
        setValue("")
    }

    return (
        <button onClick={clickHandelr}>Add</button>
    )
}

export const Input = (props) => {

    const { inputValue, setValue } = props;

    function inputValueHandler(event) {
        setValue(event.target.value)
    }

    return (
        <input type="text" value={inputValue} placeholder="Enter your text here" onChange={inputValueHandler} />
    )
}

export const ListItems = ({ listItem }) => {

    return (
        <div>
            <ul>
                {listItem.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    )
}


export const ToDo = () => {

    const [inputValue, setValue] = useState("");
    const [listItem, setListItem] = useState([]);

    return (
        <div>
            <h1>To-Do List</h1>
            <Input inputValue={inputValue} setValue={setValue} />
            <Button inputValue={inputValue} setValue={setValue} setListItem={setListItem} listItem={listItem} />
            <ListItems listItem={listItem} />
        </div>
    )
}
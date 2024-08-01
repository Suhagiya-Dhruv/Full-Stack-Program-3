import React, { useState } from 'react'

export const Button = (props) => {

    const { clickHandelr } = props;

    return (
        <button onClick={clickHandelr}>Add</button>
    )
}

export const Input = (props) => {

    const { inputValue, setValue, clickHandelr } = props;

    function inputValueHandler(event) {
        setValue(event.target.value)
    }

    function addItemEnter(event) {
        if (event.code === "Enter") {
            clickHandelr()
        }
    }

    return (
        <input type="text" value={inputValue} placeholder="Enter your text here" onChange={inputValueHandler} onKeyUp={addItemEnter} />
    )
}

export const ListItems = ({ listItem, setListItem, setValue, setIsEdit }) => {

    function deleteHandler(itemIndex) {

        const filterData = listItem.filter((item, index) => index !== itemIndex)
        setListItem(filterData)

    }

    function editHandler(itemIndex) {
        setValue(listItem[itemIndex])
        setIsEdit(itemIndex);
    }
    return (
        <div>
            <ul>
                {listItem.map((value, index) => {
                    return <div key={index} style={{ display: "flex" }}>
                        <li >{value}</li>
                        <button onClick={() => editHandler(index)}>Edit</button>
                        <button onClick={() => deleteHandler(index)}>Delete</button>
                    </div>
                })}
            </ul>
        </div>
    )
}


export const ToDo = () => {

    const [inputValue, setValue] = useState("");
    const [isEdit, setIsEdit] = useState(-1);
    const [listItem, setListItem] = useState([]);

    function clickHandelr() {
        if (isEdit !== -1) {
            const newItemUpdate = listItem.map((value, index) => {
                if(index === isEdit){
                    return inputValue;
                }else{
                    return value;
                }
            })
            setListItem(newItemUpdate)
        } else {
            setListItem([...listItem, inputValue])
        }
        setValue("")
        setIsEdit(-1);
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <Input inputValue={inputValue} setValue={setValue} clickHandelr={clickHandelr} />
            <Button inputValue={inputValue} setValue={setValue} setListItem={setListItem} listItem={listItem} clickHandelr={clickHandelr} />
            <ListItems listItem={listItem} setListItem={setListItem} setValue={setValue} setIsEdit={setIsEdit} />
        </div>
    )
}
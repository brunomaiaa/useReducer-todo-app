import React from 'react'


export default function Todo({item, onDeleteClicked, onFinishClicked}) {
    return (
      <div className='todo-item'>
          <p><b>To Do Item:</b> {item.text}</p>
          <p><b>Created On:</b> {new Date(item.createdOn).toLocaleString()}</p>
          <p><b>Status:</b> {item.done ? 'Done' : 'In progress...'}</p>
          <button type="button" onClick={() => onFinishClicked (item)}>Mark as done</button>
          <button type="button" onClick={()=> onDeleteClicked(item)}>Delete</button>
      </div>
    )
  }
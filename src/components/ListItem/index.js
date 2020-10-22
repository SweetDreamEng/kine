import React from 'react'
import { Pen } from 'components/Icon'

const ListItem = ({ handleAction, columnTexts = [] }) => {
  return (
    <tr className="list-container__list-item">
      {columnTexts.map((text, key) => {
        return (
          <td>
            <p key={key}>{text}</p>
          </td>
        );
      })}
      <td>
        <div onClick={handleAction} className="list-container__list-item-action">
          <Pen fill="#B8B7B5" />
        </div>
      </td>
    </tr>
  )
}

export default ListItem

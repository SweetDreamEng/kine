import React from 'react'

const ListHeader = ({ columnTitles = [] }) => {
  columnTitles.push({ title: 'Action', width: '15%' })

  return (
    <thead className="list-container__header">
      <tr>
        {columnTitles.map((item, key) => {
          return (
            <th key={key} className="list-container__header-title" style={{width: item.width}}>
              {item.title}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

export default ListHeader

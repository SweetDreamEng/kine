import React from 'react'

import List from 'components/List'
import ListHeader from 'components/ListHeader'
import ListItem from 'components/ListItem'
import AddButton from 'components/AddButton'

const Program = () => {

  const headers = [
    {
      title: 'Name',
      width: '50%'
    },
    {
      title: 'Type',
      width: '15%'
    },
    {
      title: 'Date',
      width: '20%'
    }
  ]

  return (
    <div className="program-container">
			<div className="program-container__action-menu">
				<AddButton />
			</div>
			<List>
				<ListHeader columnTitles={headers} />
        <tbody>
          <ListItem columnTexts={['hello', 'text', '20 Aug 2020']} />
          <ListItem columnTexts={['hello', 'text', '20 Aug 2020']} />
          <ListItem columnTexts={['hello', 'text', '20 Aug 2020']} />
          <ListItem columnTexts={['hello', 'text', '20 Aug 2020']} />
        </tbody>
			</List>
		</div>
  )
}

export default Program

import React from 'react'

import List from 'components/List'
import ListHeader from 'components/ListHeader'
import ListItem from 'components/ListItem'
import AddButton from 'components/AddButton'

const Corpo = () => {

  const headers = [
    {
      title: 'Logo',
      width: '15%'
    },
    {
      title: 'Organize Name',
      width: '70%'
    }
  ]

  return (
    <div className="corpo-container">
			<div className="corpo-container__action-menu">
				<AddButton />
			</div>
			<List>
				<ListHeader columnTitles={headers} />
        <tbody>
          <ListItem columnTexts={['', 'Searchsies Ltd.']} />
          <ListItem columnTexts={['', 'Searchsies Ltd.']} />
          <ListItem columnTexts={['', 'Searchsies Ltd.']} />
          <ListItem columnTexts={['', 'Searchsies Ltd.']} />
        </tbody>
			</List>
		</div>
  )
}

export default Corpo

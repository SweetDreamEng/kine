import React from 'react'

import List from 'components/List'
import ListHeader from 'components/ListHeader'
import ListItem from 'components/ListItem'
import AddButton from 'components/AddButton'

const Users = () => {

  const headers = [
    {
      title: 'Avatar',
      width: '15%'
    },
    {
      title: 'Organize Name',
      width: '60%'
    },
    {
      title: 'Register Date',
      width: '25%'
    }
  ]

  return (
    <div className="users-container">
			<div className="users-container__action-menu">
				<AddButton />
			</div>
			<List>
				<ListHeader columnTitles={headers} />
        <tbody>
          <ListItem columnTexts={['', 'Email@gmail.com', 'register date']} />
          <ListItem columnTexts={['', 'Email@gmail.com', 'register date']} />
          <ListItem columnTexts={['', 'Email@gmail.com', 'register date']} />
          <ListItem columnTexts={['', 'Email@gmail.com', 'register date']} />
        </tbody>
			</List>
		</div>
  )
}

export default Users

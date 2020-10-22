import React, { useEffect } from 'react'

import { useDispatch, connect } from 'react-redux'
import List from 'components/List'
import ListHeader from 'components/ListHeader'
import ListItem from 'components/ListItem'
import AddButton from 'components/AddButton'

import { getGroups } from 'redux/modules/admin/actions'

const Groups = () => {

  const dispatch = useDispatch()

  const headers = [
    {
      title: 'Group Name',
      width: '50%'
    },
    {
      title: 'Members',
      width: '20%'
    },
    {
      title: 'Admin',
      width: '15%'
    }
  ]

  useEffect(() => {
    dispatch(getGroups())
  }, [])

  return (
    <div className="groups-container">
			<div className="groups-container__action-menu">
				<AddButton />
			</div>
			<List>
				<ListHeader columnTitles={headers} />
        <tbody>
          <ListItem columnTexts={['Group Name', '80 Users', 'Natasha']} />
          <ListItem columnTexts={['Group Name', '80 Users', 'Natasha']} />
          <ListItem columnTexts={['Group Name', '80 Users', 'Natasha']} />
          <ListItem columnTexts={['Group Name', '80 Users', 'Natasha']} />
        </tbody>
			</List>
		</div>
  )
}

const mapStateToProps = ({ AdminReducer }) => ({
  groups: AdminReducer.groups
})

export default connect(mapStateToProps)(Groups)

import React from 'react'

import List from 'components/List'
import ListHeader from 'components/ListHeader'
import ListItem from 'components/ListItem'
import AddButton from 'components/AddButton'

const Shop = () => {

  const headers = [
    {
      title: 'Category Name',
      width: '65%'
    },
    {
      title: 'Quantity',
      width: '20%'
    }
  ]

  return (
    <div className="shop-container">
			<div className="shop-container__action-menu">
				<AddButton />
			</div>
			<List>
				<ListHeader columnTitles={headers} />
        <tbody>
          <ListItem columnTexts={['Category Name', '20 Products']} />
          <ListItem columnTexts={['Category Name', '20 Products']} />
          <ListItem columnTexts={['Category Name', '20 Products']} />
          <ListItem columnTexts={['Category Name', '20 Products']} />
        </tbody>
			</List>
		</div>
  )
}

export default Shop

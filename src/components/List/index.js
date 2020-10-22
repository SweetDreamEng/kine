import React from 'react'

import '../listing-style.scss'

const List = ({ children }) => {
  return <table className="list-container">{children}</table>
}

export default List

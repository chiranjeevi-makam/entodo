import './index.css'

import Item from '../BlogItem'

const BlogList = props => {
  const {updateData} = props

  return (
    <ul className="unorderList">
      {updateData.map(each => (
        <Item data={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList

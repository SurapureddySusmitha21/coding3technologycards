// Write your code here.
import './index.css'

const LearnCardsList = props => {
  const {lists} = props
  const {title, description, imgUrl, className} = lists
  return (
    <li className={`${className} developer-container`}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <img src={imgUrl} className="image-url" alt={title} />
    </li>
  )
}
export default LearnCardsList

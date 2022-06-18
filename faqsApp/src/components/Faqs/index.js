import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="background-container">
      <div className="content-container">
        <div className="heading-container">
          <h1 className="heading">FAQS</h1>
        </div>
        <ul className="unOrder-list">
          {faqsList.map(each => (
            <FaqItem list={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs

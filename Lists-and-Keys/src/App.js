import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Kranthi',
    role: 'Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Kranthi',
    role: 'Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Kranthi',
    role: 'Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">users List</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App

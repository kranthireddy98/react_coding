import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from './components/passwordItem'

import './App.css'

class App extends Component {
  state = {
    websiteName: '',
    userName: '',
    password: '',
    passwordList: [],
    isPasswordShowing: false,
    searchInput: '',
  }

  onAddWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  onAddUserName = event => {
    this.setState({userName: event.target.value})
  }

  onAddPassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      isPasswordShowing: !prevState.isPasswordShowing,
    }))
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const newDetails = {
      id: v4(),
      website: websiteName,
      user: userName,
      pass: password,
    }

    if (websiteName !== '' && userName !== '' && password !== '') {
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newDetails],
        websiteName: '',
        userName: '',
        password: '',
      }))
    }
  }

  deletePassword = id => {
    const {passwordList} = this.state

    this.setState({
      passwordList: passwordList.filter(each => each.id !== id),
    })
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      websiteName,
      userName,
      password,
      isPasswordShowing,
      passwordList,
      searchInput,
    } = this.state

    const searchResults = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const len = searchResults.length

    return (
      <div className="background-container">
        <div className="container">
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="top-container">
            <div className="password-manager-container-sm">
              <img
                className="password-manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
            <form className="form-container" onSubmit={this.onSubmitDetails}>
              <h1 className="add-new">Add New Password</h1>
              <div className="input-container">
                <div className="image-container">
                  <img
                    className="search-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                  />
                </div>
                <input
                  onChange={this.onAddWebsiteName}
                  value={websiteName}
                  placeholder="Enter Website"
                  type="text"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <div className="image-container">
                  <img
                    className="search-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  onChange={this.onAddUserName}
                  value={userName}
                  placeholder="Enter Username"
                  type="text"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <div className="image-container">
                  <img
                    className="search-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                  />
                </div>
                <input
                  onChange={this.onAddPassword}
                  value={password}
                  placeholder="Enter Password"
                  type="password"
                  className="input-field"
                />
              </div>
              <div className="button-container">
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
            <div className="password-manager-container">
              <img
                className="password-manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
              />
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="header-container">
            <div className="contt">
              <h1 className="your">Your Passwords </h1>
              <p className="count">{len}</p>
            </div>
            <div className="search-password">
              <img
                className="search-image "
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                onChange={this.onSearchInput}
                placeholder="Search"
                className="password-search-input"
                type="search"
              />
            </div>
          </div>

          <hr />
          <div className="checkbox-container">
            <input type="checkbox" id="check" onChange={this.onShowPassword} />
            <label htmlFor="check">Show Passwords</label>
          </div>
          {len === 0 ? (
            <div className="noPasswordContainer">
              <img
                className="noPasswordsImage"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="unordered">
              {searchResults.map(each => (
                <PasswordItem
                  deletePasswordItem={this.deletePassword}
                  list={each}
                  key={each.id}
                  isPasswordShowing={isPasswordShowing}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App

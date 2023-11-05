import {Component} from 'react'

import './index.css'

import Language from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    filterId: languageFiltersData[0].id,
    list: languageFiltersData,
    Loading: true,
  }

  render() {
    return (
      <div className="structure">
        <h1 className="head">Popular</h1>
        <ul className="names">
          {languageFiltersData.map(each => (
            <Language details={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos

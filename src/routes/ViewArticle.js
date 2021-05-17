import React, { Fragment, Component } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap/'
import apiUrl from '../apiConfig'
import axios from 'axios'
import { showArticle } from './../api/article-auth.js'
import FutureFeature from './FutureFeature.js'

class ViewArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { user, match, msgAlert } = this.props
    showArticle(match.params.id, user)
      .then(res => this.setState({ article: res.data.article }))
      .catch(error => {
        msgAlert({
          heading: 'Try Again',
          message: 'ERROR: ' + error.message,
          variant: 'danger'
        })
      })
  }
  deleteArticle = () => {
    const { user, match, msgAlert } = this.props
    axios({
      url: `${apiUrl}/articles/${match.params.id}`,
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(msgAlert({
        heading: 'Success!',
        message: 'Your article has been deleted ',
        variant: 'primary'
      }))
      .catch(console.error)
  }
  render () {
    let articleJsx
    const { article, deleted } = this.state
    if (!article) {
      articleJsx = 'Loading...'
      return articleJsx
    }
    if (article) {
      articleJsx = (
        <Fragment>
          <div className='article-main'>
            <h2 className='roboto-mono'>{article.title}</h2>
            <h4 className='roboto-mono'>{article.authorName}</h4>
            <div className='art-img-container'>
              <img className='article-image' src={article.mainImageUrl}></img>
            </div>
            <p className='art-text raleway'>{article.content}</p>
          </div>

          <div>
            <div className='divider comm-comm'>
              <h2 className='community-comments-text raleway'>Community Comments</h2>
            </div>
            < FutureFeature />
            <button className='a-button' onClick={this.deleteArticle}>a1</button>
            <button className='a-button'><Link to={`/home/articles/${article.id}/update/`}>a2</Link></button>
          </div>
        </Fragment>
      )
    }
    return (
      <Fragment>
        {deleted ? <Redirect to="/home"/> : articleJsx}
      </Fragment>
    )
  }
}

export default withRouter(ViewArticle)

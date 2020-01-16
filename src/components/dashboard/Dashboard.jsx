import React from 'react'
import Notifications from './Notifications'
import ArticleList from '../articles/ArticleList'
import { connect } from 'react-redux'

function Dashboard(props) {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ArticleList articles={props.articles} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    articles: state.article.articles
  }
}

export default connect(mapStateToProps)(Dashboard)
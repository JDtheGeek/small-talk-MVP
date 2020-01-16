import React from 'react'
import ArticleSummary from './ArticleSummary'


export default function ArticleList({ articles }) {
  return (
    <div className="project-list section">
      {articles && articles.map(article => {
        return (
          <ArticleSummary article={article} key={article.id} />
        )
      })}
    </div>
  )
}

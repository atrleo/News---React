import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h1>Highlighted news for today</h1>
      <div className='row '>
        <div className='col-md-4'> <NewsItem  title="Todays News" description="All the highlighted news for today agan." imageUrl="https://cdn.mos.cms.futurecdn.net/cX6ipKh4MzXnqHY2gHnvGP-1200-80.jpg"/>
        </div>
        <div className='col-md-4'><NewsItem title=" Yesterdays News" description="All the highlighted news for yesterday." /></div>
        <div className='col-md-4'><NewsItem title="Weeks News" description="All the highlighed news of this week."/></div>
      </div>
        


        
      </div>
    )
  }
}

export default News

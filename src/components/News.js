import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {



    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page :1 ,
        }

    }
    async componentDidMount(){
   
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df8a7771fa5741d986caa7313ca59aed&page=1&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles:parseData.articles,
            totalResults: parseData.totalResults,
     
        });

    }

     handlePreviousCLick = async()=>{
      
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles
        });


    }
    
    handleNextClick = async () =>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
  
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            page : this.state.page + 1,
            articles:parseData.articles,
            });
        }

    }


    render() {
        return (
            <div className='container my-4'>
                <h1 style={{textAlign:'center'}}>Highlighted news for today</h1>
                <div className='row ' >
                    {this.state.articles.map((element) => {

                        return <div className='col-md-4'    key={element.url}> <NewsItem title={element.title} description={element.description?element.description.slice(0,120):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}


                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePreviousCLick} >	&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  className='btn btn-dark' type="button" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>


          
 
            </div>
        )
    }
}

export default News



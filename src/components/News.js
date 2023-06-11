import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css"



export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: '21',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalize = (str) => {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        if (str.length === 0) {
            return str;
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0,
        }
        document.title = `${this.capitalize(this.props.category)} - DailyNews`;

    }





    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,

        });

    }

    // handlePreviousCLick = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    //     this.setState(
    //         { loading: true }
    //     );
    //     let data = await fetch(url);
    //     let parseData = await data.json();

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseData.articles,
    //         loading: false,
    //     });

    // };

    // handleNextClick = async () => {


    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //     this.setState(
    //         { loading: true }
    //     );
    //     let data = await fetch(url);
    //     let parseData = await data.json();

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parseData.articles,
    //         loading: false,
    //     });


    // }



      fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
      };




    render() {
        return (
            <>
           
                <h1 style={{ textAlign: 'center',margin : '35px 0px' } }>Daily News - {this.capitalize(this.props.category)} </h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={ this.state.loading &&  <Spinner />}
                
                >
                  
                    <div className='container'>
                    <div className='row ' >
                        {!this.state.loading && this.state.articles.map((element) => {

                            return <div className='col-md-4' key={element.url}> <NewsItem title={element.title} description={element.description ? element.description.slice(0, 120) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>

                        })}


                    </div>
                    </div>
                    </InfiniteScroll>

                    {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePreviousCLick} >	&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' type="button" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div> */}




          
            </>
        )
    }
}

export default News


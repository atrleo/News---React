import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


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


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }

    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.props.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,

        });

    }

    handlePreviousCLick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState(
            { loading: true }
        );
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false,
        });


    }

    handleNextClick = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=df8a7771fa5741d986caa7313ca59aed&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState(
            { loading: true }
        );
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
            loading: false,
        });
    };




render() {
    return (
        <div className='container my-4 text-center'>
            <h1 style={{ textAlign: 'center' }}>Highlighted news for today </h1>
            {this.state.loading && <Spinner />}

            <div className='row ' >
                {!this.state.loading && this.state.articles.map((element) => {

                    return <div className='col-md-4' key={element.url}> <NewsItem title={element.title} description={element.description ? element.description.slice(0, 120) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>

                })}


            </div>

            <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePreviousCLick} >	&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' type="button" onClick={this.handleNextClick} >Next &rarr;</button>
            </div>




        </div>
    )
}
}

export default News


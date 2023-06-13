import React, {useState,useEffect, useLayoutEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);
    // document.title = `${this.capitalize(props.category)} - DailyNews`;



    const capitalize = (str) => {
        if (typeof str !== 'string') {
            throw new Error('Input must be a string');
        }

        if (str.length === 0) {
            return str;
        }

        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    const updateNews= async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
   
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
 
    }

    useEffect(() => {
        updateNews();
   
      }, []);
      

   
    // handlePreviousCLick = async () => {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
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


    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
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



     const fetchMoreData = async () => {  
     
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);

      };




    
        return (
            <>
           
                <h1 style={{ textAlign: 'center',margin : '35px 0px',marginTop:'80px' } }>Daily News - {capitalize(props.category)} </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={ loading &&  <Spinner />}
                
                >
                  
                    <div className='container'>
                    <div className='row ' >
                        {!loading && articles.map((element) => {

                            return <div className='col-md-4' key={element.url}> <NewsItem title={element.title} description={element.description ? element.description.slice(0, 120) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>

                        })}


                    </div>
                    </div>
                    </InfiniteScroll>

                    {/* <div className='container d-flex justify-content-between'>
                        <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePreviousCLick} >	&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className='btn btn-dark' type="button" onClick={this.handleNextClick} >Next &rarr;</button>
                    </div> */}




          
            </>
        )
    
}
News.defaultProps = {
    country: 'us',
    pageSize: '21',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News


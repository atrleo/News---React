import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "England World Cup squad announcement, football news and transfer latest",
            "description": "Latest football and transfer news, including England squad announcement for 2023 Fifa Women's World Cup and Europa League final build-up.",
            "url": "http://www.bbc.co.uk/sport/live/football/65762835",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-05-31T06:07:21.7643891Z",
            "content": "It's day three without Premier League football - hope you're all holding up ok.\r\nTo sate your appetites, we have the small matter of a European final later as Sevilla face Roma, and we'll have all th… [+368 chars]"
        },
        {
            "source": {
                "id": "lequipe",
                "name": "L'equipe"
            },
            "author": "L'EQUIPE",
            "title": "Programme TV foot : à quelle heure et sur quelle chaîne voir les matchs de ce soir (31 mai 2023) ?",
            "description": "Retrouvez l'intégralité des retransmissions des matches de football du jour retransmis sur toutes les chaînes du bouquet TNT, Câble et Satellite. Ligue 1, Ligue 2, Premier League, coupes d'Europe... Suivez tous les matches en direct sur votre télévision ou en…",
            "url": "https://www.lequipe.fr/Football/Actualites/Programme-tv-foot-a-quelle-heure-et-sur-quelle-chaine-voir-les-matchs-de-ce-soir-31-mai-2023/1399633",
            "urlToImage": "https://medias.lequipe.fr/img-photo-jpg/-/1500000001560312/4:0,2500:1664-640-427-75/16a19.jpg",
            "publishedAt": "2023-05-31T05:00:18+00:00",
            "content": "Coupe du monde U20 - 8èmes de finale \r\n- Colombie - Slovaquie : à 19h30 en direct uniquement sur L'Équipe Live- Argentine - Nigéria : à 23 heures en direct uniquement sur L'Équipe Live- Angleterre - … [+58 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Phil Spencer",
            "title": "Newcastle, Tottenham, West Ham and Aston Villa transfer targets are relegated stars set for immediate...",
            "description": "The Premier League season is over and several top stars are facing the prospect of life in the EFL. Football is a team game and therefore every player associated with Southampton, Leeds and Leicest…",
            "url": "https://talksport.com/football/1440031/transfer-news-james-maddison-jack-harrison-james-ward-prowse/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/05/SD-TALKSPORT-MADDISON-HARRISON.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-05-30T21:00:00Z",
            "content": "The Premier League season is over and several top stars are facing the prospect of life in the EFL.\r\nFootball is a team game and therefore every player associated with Southampton, Leeds and Leiceste… [+3334 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Mark White",
            "title": "Lionel Messi has accepted offer from Al-Hilal: report",
            "description": "Lionel Messi has accepted a huge offer from Saudi Araian side Al-Hilal, which will make him the best-paid footballer ever",
            "url": "https://www.fourfourtwo.com/news/lionel-messi-has-accepted-offer-from-al-hilal-report",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/cX6ipKh4MzXnqHY2gHnvGP-1200-80.jpg",
            "publishedAt": "2023-05-30T15:27:03Z",
            "content": "Lionel Messi has agreed a deal with Saudi Arabian side Al-Hilal worth over a billion pounds.\r\nThe Paris Saint-Germain attacker and 2022 World Cup winner is widely rumoured to be leaving Ligue 1 after… [+1424 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]


    constructor() {
        super();
        this.state = {
            article: this.articles,
            food: this.foods,
            loading: true,
        }

    }


    render() {
        return (
            <div className='container my-4'>
                <h1>Highlighted news for today</h1>
                <div className='row ' >
                    {this.state.article.map((element) => {

                        return <div className='col-md-4'    key={element.url}> <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} />
                        </div>

                    })}


                </div>


                F

            </div>
        )
    }
}

export default News



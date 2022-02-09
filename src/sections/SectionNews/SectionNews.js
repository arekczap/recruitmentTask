import React from 'react'
import './SectionNews.scss'

import newsImage1 from '../../assets/newsImage1.png'
import newsImage2 from '../../assets/newsImage2.png'
import newsImage3 from '../../assets/newsImage3.png'

const sectionNewsData = [
  {
    imageSrc: newsImage1,
    dataText: '01.01.2021',
    titleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: newsImage2,
    dataText: '01.01.2021',
    titleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imageSrc: newsImage3,
    dataText: '01.01.2021',
    titleText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const SectionNews = () => (
  <div id={'news'} className={'sectionNews'}>
    <span className={'sectionNews__headingText'}>Aktualności</span>
    <div className={'sectionNews__contentContainer'}>
      {
        sectionNewsData.map((news) => (
          <div key={news.imageSrc}>
            <div className={'sectionNews__itemWrapper'} >
              <img className={'sectionNews__itemWrapper__image'} src={news.imageSrc} />
              <span className={'sectionNews__itemWrapper__dateText'}>{news.dataText}</span>
              <p className={'sectionNews__itemWrapper__titleText'}>{news.titleText}</p>
              <span className={'sectionNews__itemWrapper__moreText'}>Więcej</span>
            </div>
          </div>))
      }
    </div>
  </div>
)

export default SectionNews

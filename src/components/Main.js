import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/rachgreg1.jpg'
import pic02 from '../images/rachgreg2.jpg'
import pic03 from '../images/rachgreg3.jpg'
import pic04 from '../images/rachgreg4.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'story' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Our Story</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>The romance began in a small Los Angeles coffeeshop called Massimo's Mudspot. Rachael needed somewhere to do her editing work conveniently located between home and her nannying gig. Greg worked the slow closing shift, providing ample time for the two to discuss Greg's musical choices and solve crossword puzzles. One night they struck up a plan to get a drink at the bar next door after Greg closed shop. Then the next week a date for Thai food.</p>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Within two months, accompanied by her friend Kate, Rachael would move to Oaxaca, Mexico, where she intended to learn Spanish while teaching English. This didn't extinguish the budding romance; modern technology facilitated the distance, and when Greg visited, it provided the couple their first opportunity to travel and discover new places together. After an autumn together back in Los Angeles, Greg went to live in Managua, Nicaragua and Rachael in Mexico City, each visiting the other. Altogether, they've traveled through six foreign countries and over half of the United States.</p>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Then followed a summer together in Los Angeles, during which Rachael was admitted to the University of Iowa's Master of Fine Arts program in Literary Translation. A semester later, Greg would join her in Iowa City, establishing the Smaltman household and taking advantage of the time and space to teach himself the basics of web programming.</p>
          <span className="image main"><img src={pic04} alt="" /></span>
          <p>Two years later, with degree in her hand, it was time to hit the road. Greg had his eye on an experimental retreat in New York City called Hacker School (now called Recurse Center), while Rachael secured an internship in publicity at the Book Department of the Cultural Services of the French Embassy. At the time, it was unclear how long they would call Brooklyn home, now six years later the question is if they'll ever leave.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'venue' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Big Day</h2>
          <p>We look forward to having you join us at the Los Angeles River Center & Gardens on March 16, 2019. The beautiful wrought-iron gates will open at 4:30 and the ceremony will take place in the San Fernando Courtyard. Dress your best though there is no particular dress code.</p>
          <h3 className="major">The Venue</h3>
          <p>It was important to us to choose a beautiful venue that allowed us to give back to the community and environment. With the Los Angeles River Center, we got all of that, along with some bonus sentimental value. Now owned and managed by the nonprofit Mountains Recreation and Conservation Authority, dedicated to the preservation of public parkland, the LA River Center is located at the site of the former Lawry’s California Center, a restaurant that was near and dear to the Small family. Rachael’s bubbie, Eleanor Small, and zaydie, Abraham Small, loved the Lawry’s California Center and would bring the family there regularly for special occasions, including birthdays and mother’s day. Now, with Rachael and Greg’s wedding, the space will once more be a site of celebration, which we know would have moved Eleanor and Abraham and made them very happy.</p>
          <h3 className="major">The Ceremony</h3>
          <p>We are grateful to our wonderful friends, who will animate our celebration with their talents.</p>
          <p>We will be married by Nathan Rodriguez. Nathan and Greg met in 4th grade and have been great friends ever since, performing in high school plays and musicals together and having many adventures on both coasts. Nathan, Rachael, and Greg lived together in Brooklyn.</p>
          <p>Ceremony music will be provided by Karl McComas Reichl on solo cello. Rachael and Greg met Karl and his wife Lesley while all were living in Iowa City. They spent many evenings in Karl and Lesley’s cozy cottage, cooking and laughing and playing with their brilliant dog, Dinah.</p>
          <h3 className="major">Gifts</h3>
          <div>
            <p>
              Having you there with us is all the gift we need, but if you're so inclined, we'd
              honored if you would donate in our names to any of the following organizations:
            </p>
            <ul className='gifts'>
              {
                (
                  (a) => {
                    // shuffle a
                    for (let i = a.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [a[i], a[j]] = [a[j], a[i]];
                    }
                    return a;
                  }
                )([
                  ["Electronic Fronteir Foundation", "https://supporters.eff.org/donate/join-4"],
                  ["Books Through Bars", "https://booksthroughbarsnyc.org/donate/"],
                  ["Words Without Borders", "https://www.wordswithoutborders.org/donate/"],
                  ["National Book Foundation", "https://www.nationalbook.org/get-involved/donate/"],
                  ["Planned Parenthood", "https://www.weareplannedparenthood.org/onlineactions/cOJVhOyrzkq4uBcxVekXFA2?unpubredirect=true&affiliateID=090330"],
                  ["Goodwill", "http://give.goodwill.org"],
                  ["New Yorkers for Parks", "http://www.ny4p.org/"],
                  ["Black Lives Matter", "https://blacklivesmatter.com/take-action/donate/"],
                  ["CAIR", "https://www.cair.com/donate"],
                  ["Code.org", "https://donate.code.org/"],
                  ["Girls Who Code", "https://www.classy.org/give/77372/#!/donation/checkout"],
                  ["Girls Write Now", "https://www.girlswritenow.org/givewritenow/"]
                ]).map(
                  item => (
                    <li key={item[1]}>
                      <a rel="noopener noreferrer" target="_blank" href={item[1]}>
                        {item[0]}
                      </a>
                    </li>
                  )
                )
              }
            </ul>
          </div>
          <h3 className="major">Parking</h3>
          <p>The LA River Center has a beautiful spacious (and free) parking lot that will be reserved for our guests. You’re welcome to leave your car overnight, as long as you pick it up by 10am on Sunday, the 17th.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'visiting' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Visiting LA</h2>
          <p>Coming soon!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'rsvp' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <iframe height='600' style={{width: '100%'}} src="https://goo.gl/forms/jVth3alLZUadLYin2"></iframe>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

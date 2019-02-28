import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/rachgreg1.jpg'
import pic02 from '../images/rachgreg2.jpg'
import pic03 from '../images/rachgreg3.jpg'
import pic04 from '../images/rachgreg4.jpg'

const Link = ({to, children}) => <a rel="noopener noreferrer" target="_blank" href={to}>{children}</a>

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
          <p>We look forward to having you join us at the Los Angeles River Center & Gardens on March 16, 2019. At 4:30, the ceremony will take place in the San Fernando Courtyard. Dress your best though there is no particular dress code.</p>
          <h3 className="major">The Venue</h3>
          <p>It was important to us to choose a beautiful venue that allowed us to give back to the community and environment. With the Los Angeles River Center, we got all of that, along with some bonus sentimental value. Now owned and managed by the nonprofit Mountains Recreation and Conservation Authority, dedicated to the preservation of public parkland, the LA River Center is located at the site of the former Lawry’s California Center, a restaurant that was near and dear to the Small family. Rachael’s bubbie, Eleanor Small, and zaydie, Abraham Small, loved the Lawry’s California Center and would bring the family there regularly for special occasions, including birthdays and mother’s day. Now, with Rachael and Greg’s wedding, the space will once more be a site of celebration, which we know would have moved Eleanor and Abraham and made them very happy.</p>
          <h3 className="major">The Ceremony</h3>
          <p>We are grateful to our wonderful friends, who will animate our celebration with their talents.</p>
          <p>We will be married by Nathan Rodriguez. Nathan and Greg met in 4th grade and have been great friends ever since, performing in high school plays and musicals together and having many adventures on both coasts. Nathan, Rachael, and Greg lived together in Brooklyn.</p>
          <p>Ceremony music will be provided by Karl McComas Reichl on solo cello. Rachael and Greg met Karl and his wife Lesley while all were living in Iowa City. They spent many evenings in Karl and Lesley’s cozy cottage, cooking and laughing and playing with their brilliant dog, Dinah.</p>
          <h3 className="major">Gifts</h3>
          <div>
            <p>
              Your presence is a gift in itself. If you are so inclined, we would be honored if you would
              donate in our names to any of the following organizations:
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
                      <Link to={item[1]}>{item[0]}</Link>
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
          <h2 className="major">Visiting Los Angeles</h2>

          <h3 className="major">Where To Stay</h3>
          <p>
            If you're using <Link to='http://airbnb.com'>Airbnb</Link>/<Link to='https://www.vrbo.com'>VRBO</Link>,
            and want to stay near the venue, we recommend searching the following neighborhoods:
              <ul className='gifts'>
                <li>Highland Park</li>
                <li>Mount Washington</li>
                <li>Atwater Village</li>
                <li>Los Feliz</li>
                <li>Echo Park</li>
                <li>Silverlake</li>
                <li>Eagle Rock</li>
              </ul>
          </p>
          <p>
            If hotels are more your style, then we recommend looking in Downtown LA or Pasadena. Here
            are some great options (but only a very partial list):
            <ul className='gifts'>
              <li><Link to="https://freehandhotels.com/los-angeles/">Freehand Hotel</Link></li>
              <li><Link to="https://www.thenomadhotel.com/los-angeles">Nomad Hotel</Link></li>
              <li><Link to="https://www.hotelfigueroa.com">Hotel Figueroa</Link></li>
              <li><Link to="https://www.millenniumhotels.com/en/los-angeles/millennium-biltmore-hotel-los-angeles/">Biltmore Hotel</Link></li>
            </ul>
          </p>
          <h3 className="major">Where To Eat</h3>
          <p>These are some spots we always try to hit when we're in town</p>
          <ul>
            <li><Link to="https://www.yelp.com/biz/nicks-coffee-shop-los-angeles-4">Nick's</Link> — The diner to end all diners. Best hashbrowns on Earth.</li>
            <li><Link to="https://www.yelp.com/biz/torung-restaurant-los-angeles">Torung Thai</Link> — Cheap and good late night Thai food</li>
            <li><Link to="https://www.yelp.com/biz/el-chato-taco-truck-los-angeles-2">El Chato Taco Truck</Link> — LA's best Taco Truck open Tues-Sat nights located a couple blocks from where Greg and Rachael met</li>
            <li><Link to="https://www.yelp.com/biz/noshi-sushi-los-angeles">Noshi Sushi</Link> — Unpretentious and delicious sushi</li>
            <li><Link to="https://www.yelp.com/biz/bcd-tofu-house-los-angeles">BCD Tofu House</Link> — Koreatown Favorite that we're lucky enough to have in NYC</li>
          </ul>
          <h3 className="major">Bookstores</h3>
            <p><Link to='https://www.skylightbooks.com/'>Skylight</Link> — Rachael’s favorite bookstore in the world, in the heart of Los Feliz. When you stop by, be sure to check out their translated literature display, greet the beautiful store cat, and sit a spell under the gorgeous tree in the middle. And if art books are more your thing, check out the art book annex a couple doors down.</p>
            <p><Link to='https://www.chevaliersbooks.com/'>Chevaliers</Link> — A staple of Larchmont, the heart of the neighborhood Rachael grew up in, Chevaliers has transformed from a dusty neighborhood bookshop to a cultural center, with vibrant events and a fantastically curated selection.</p>
            <p><Link to='http://lastbookstorela.com/'>The Last Bookstore</Link> — Downtown LA’s coolest space, the downstairs is a big, airy mix of books, comics, and music, but be sure to venture upstairs. There you’ll find the storied used book labyrinth (just do an image search to see how cool it is), as well as various artists’ studios that you can peek into.</p>
          <h3 className="major">Coffee</h3>
            <ul>
              <li><Link to='https://www.caffeluxxe.com/'>Caffe Luxxe</Link> — Slinging great espresso in LA since before it was cool.</li>
              <li><Link to='https://www.groundworkcoffee.com/'>Groundwork</Link> — Exemplary coffee roasters of the LA area.</li>
              <li><Link to='https://www.conservatorycoffeeandtea.com/'>The Conservatory</Link> — Downtown Culver City's finest coffee staple.</li>
            </ul>
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

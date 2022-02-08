const starting_11 = [
  {
    id: 1,
    name: "petr cech",
    position: "goalkeeper",
    nationality: "czechoslovakia",
    squad_number: 1, 
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Petr_%C4%8Cech_Chelsea_2013.jpg/502px-Petr_%C4%8Cech_Chelsea_2013.jpg",
    career:
      "In July 2004, Cech signed for Chelsea for a fee of £7,000,000, becoming the most expensive goalkeeper in the clubs history. The Czech international quickly established himself as the Blues first-choice keeper. On 5 March 2005, Cech wrote himself down in Premier League history after not conceding a goal for 1,025 consecutive minutes, and earned the Golden Glove with 21 clean-sheets, a record that still stands.",
  },
  {
    id: 2,
    name: "jose bosingwa",
    position: "defender",
    nationality: "portugal",
    squad_number: 17,
    image:
      "https://cdn.vox-cdn.com/thumbor/y5nLxBevQ6bjH2Jo3gvJZuuiv74=/0x0:1000x667/920x613/filters:focal(0x0:1000x667):format(webp)/cdn.vox-cdn.com/photo_images/6792715/143900844.jpg",
    career:
      "An attacking fullback, his pace and ability to get up and down the flanks created problems for the opposition.",
  },
  {
    id: 3,
    name: "david luiz",
    position: "defender",
    nationality: "brazil",
    squad_number: 4,
    image:
      "https://m.media-amazon.com/images/M/MV5BYjFmNGQ3NGItNDcwYS00NDllLWIyY2QtYWQ2NWE1NjY5Yjk0XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY317_CR175,0,214,317_AL_.jpg",
    career:
      "On 31 January 2011, Luiz completed a move to Chelsea for an undisclosed fee, which Benfica reported to be €25 million, on a five and a half year contract After signing for Chelsea, he outlined his determination to nail down a regular place in the side, and took the previously unclaimed number 4 shirt, last worn by Claude Makelele. He won plenty of plaudits for his early showings although conceded a late penalty on his first start, saved by Petr Cech, and went on to win the man of the match award. Ineligible for the Champions League, he retained his place in the Premier League side until a goal conceded in the opening seconds at Old Trafford torpedoed Chelsea's title chances and Carlo Ancelotti left the Brazilian out of the remaining games.",
  },
  {
    id: 4,
    name: "david cahill",
    position: "defender",
    nationality: "england",
    squad_number: 24,
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000361067292-e1508362148473.jpg?w=620",
    career:
      "On 30 December 2011, Bolton Wanderers and Chelsea agreed a £7,000,000 fee for Cahill. But it wasn't until January 16 that the transfer was confirmed. Cahill was pictured on the Official Chelsea website, with the shirt number of 24. On 5 February 2012, Cahill made his Chelsea debut in a 3-3 draw vs Manchester United.",
  },
  {
    id: 5,
    name: "ashley cole",
    position: "defender",
    nationality: "england",
    squad_number: 3,
    image:
      "https://www.vbetnews.com/wp-content/uploads/2020/04/Ashley-Cole-October-2012_2841291-1024x576.jpg",
    career:
      "Ashley Cole was a 2006 summer deadline day signing from Arsenal, to whom the club paid £5 million plus William Gallas, and he made his debut against Werder Bremen in September that year. A fabulous athlete who loves to go forward, he admitted at that season's end that Blues fans had yet to see him at his very best, a series of injures having hindered the settling process. Competition with Wayne Bridge for the left-back slot had ended with a roughly even share of games. An ankle operation in the summer cleared the way for an uninhibited start to the 2007-08 season and with Bridge injured, Ashley got off to a flyer and enjoyed the club's share of matches that season, particularly for the big encounters.",
  },
  {
    id: 6,
    name: "frank lampard",
    position: "midfielder",
    nationality: "england",
    squad_number: 8,
    image:
      "https://m.media-amazon.com/images/M/MV5BNmU1NzhkODYtZWQwMC00YzNkLTlhNDgtOWRmNWE2ZDI4Y2ZiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY317_CR131,0,214,317_AL_.jpg",
    career:
      "After his uncle; Harry Redknapp was sacked at Upton Park, the Irons accepted a £11,000,000 bid for young Lampard, from Chelsea.An early sign of what was to come was his commanding display against Arsenal's Patrick Vieira in an FA Cup Final defeat at the end of his first season, progress that was continued the following campaign. In the 2003-04 season, the first season under Roman Abramovich's ownership and Frank's third at the club, he retained his place despite many new arrivals and his phenomenal form was only beaten by Thierry Henry when English football's individual awards were handed out. The top performances continued to come in 2004-05, as did the goals, Frank's powerful shooting firing Chelsea to the Premiership title that season as he top-scored from midfield with 13 in the League and 19 overall. ",
  },
  {
    id: 7,
    name: "salomon kalou",
    position: "winger",
    nationality: "cote d'ivoire",
    squad_number: 21,
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p37352.png",
    career:
      "He previously played for Feyenoord from 2003 to 2006 and Chelsea from 2006 to 2012. While at Chelsea, he won numerous honours, including the Premier League, the UEFA Champions League, four FA Cups and the League Cup. Upon the expiry of his contract at Chelsea, he moved on a free transfer in July 2012 to Lille, where he spent two seasons before moving to Hertha BSC for an undisclosed fee.",
  },
  {
    id: 8,
    name: "juan mata",
    position: "midfielder",
    nationality: "spain",
    squad_number: 10,
    image:
      "https://sm.imgix.net/13/32/juan-mata-chelsea.jpg?w=640&h=480&auto=compress,format&fit=clip",
    career:
      "On 24 August 2011, it was confirmed that Mata had signed for Chelsea, for a fee of £23,500,000. Mata came on as a substitute and scored a goal in the 3-1 victory over Norwich. He made his European debut vs Bayer Leverkusen in the Champions League and scored a stoppage time winner in the 2-0 win. The spanish star got a goal and an assist in the 5-3 loss to Arsenal. On 5 February 2012, Mata scored an unstoppable volley to double the Blues lead vs Manchester United.",
  },
  {
    id: 9,
    name: "ryan bertrand",
    position: "defender",
    nationality: "england",
    squad_number: 34,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/67/590x/ryan-bertrand-445695.jpg",
    career:
      "Bertrand began his youth career at Gillingham, before signing for Chelsea in July 2005. He graduated from Chelsea's youth system and was sent on loan to various clubs between 2006 and 2010. He made his full debut for Chelsea on in April 2011, six years after joining them, in a fixture against Birmingham City. In the 2011–12 season, Bertrand signed a new four-year contract with Chelsea and was made understudy to Ashley Cole. In May 2012, Bertrand became the first player to make his Champions League debut in the final, starting in an unfamiliar left wing role in front of Cole; Chelsea beat Bayern Munich 4–3 on penalties.",
  },
  {
    id: 10,
    name: "john obi-mikel",
    position: "midfielder",
    nationality: "nigeria",
    squad_number: 12,
    image:
      "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2020/05/mikel.jpg?resize=768%2C538&ssl=1",
    career:
      "Mikel began his career with local club Plateau United, before joining Norwegian club Lyn at the age of 17 in 2004. In 2006, he made a controversial transfer to English club Chelsea after Manchester United claimed they had already signed him. He stayed with Chelsea for 11 years, before moving to China with Tianjin TEDA in 2017. After two years in China, he returned to England on a short-term deal with Middlesbrough, before joining Trabzonspor on a free transfer in July 2019. Mikel moved back to England in August 2020 joining Stoke City. In a 14-year international career between 2005 and 2019, he played 91 times for Nigeria, scoring six goals.",
  },
  {
    id: 11,
    name: "didier drogba",
    position: "striker",
    nationality: "cote d'ivoire",
    squad_number: 11,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/05/22/20/pg-68-drogba-goodbye-2-gett.jpg?quality=75&width=640&auto=webp&crop=982:726,smart",
    career:
      "Signing for Chelsea in July 2004 for £24 million, Drogba scored in his third game for the club with a header against Crystal Palace. His season was interrupted when he pulled a stomach muscle against Liverpool which kept him out of action for over two months. Chelsea won the Premiership, only their second English top-flight championship and their first in 50 years, and the League Cup, with Drogba scoring in extra time in a 3-2 final win against Liverpool at the Millennium Stadium, as well as reaching the semi-finals of the Champions League. Drogba scored 16 goals in 40 games for Chelsea in his first season: 10 in the Premiership, five in the Champions League and one in the League Cup final.",
  },
];

export default starting_11;

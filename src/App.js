import React, { useState, useEffect } from 'react';
import Articles from './components/Articles/Articles';
import './App.scss';

// api-key: BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32

const App = () => {
  // const [articles, setArticles] = useState([
  //   {id: 1, title: 'Bucha\'s Month of Terror', section: 'world', published_date: '2022-04-11T05:31:11-04:00', byline: 'By Daniel Berehulak and Carlotta Gall', abstract: 'We documented dozens of killings of civilians and interviewed scores of witnesses to uncover Russian atrocities in Ukraine.', short_url: "https://nyti.ms/37Dgk6b", multimedia: [{}, {url: "https://static01.nyt.com/images/2022/04/10/world/xxbucha3-promo/merlin_205302633_f60ec66d-8227-47e6-b703-b7b936ad93b0-threeByTwoSmallAt2X.jpg", format: 'threeByTwoSmallAt2X'}, {url: "https://static01.nyt.com/images/2022/04/10/world/xxbucha3-promo/merlin_205302633_f60ec66d-8227-47e6-b703-b7b936ad93b0-thumbLarge.jpg", format: 'Large Thumbnail'}]},
  //   {id: 2, title: 'U.S. Weighs Shift to Support Hague Court as It Investigates Russian Atrocities', section: 'us', published_date: "2022-04-11T05:00:22-04:00", byline: "By Charlie Savage", abstract: "The government is hamstrung from helping the world’s war-crimes court by two laws and a policy aimed at barring it from charging Americans.", short_url: "https://nyti.ms/3xiRcfT", multimedia: [{}, {url: "https://static01.nyt.com/images/2022/04/08/us/politics/00dc-warcrimes-1/merlin_205047645_8228bbd3-55c6-4dc8-bed9-ced81c391bf3-threeByTwoSmallAt2X.jpg", format: "threeByTwoSmallAt2X"}, {url: "https://static01.nyt.com/images/2022/04/08/us/politics/00dc-warcrimes-1/merlin_205047645_8228bbd3-55c6-4dc8-bed9-ced81c391bf3-thumbLarge.jpg", format: "Large Thumbnail"}]},
  //   {id: 3, title: 'U.S. Weighs Shift to Support Hague Court as It Investigates Russian Atrocities', section: 'world', published_date: "2022-04-11T05:00:22-04:00", byline: "By Charlie Savage", abstract: "The government is hamstrung from helping the world’s war-crimes court by two laws and a policy aimed at barring it from charging Americans.", short_url: "https://nyti.ms/3xxSbt1", multimedia: [{}, {url: "https://static01.nyt.com/images/2022/04/10/world/10ukraine-scene-promo/merlin_205306347_bccddc78-f125-44c1-acc5-3d9e585c2aaa-threeByTwoSmallAt2X.jpg", format: "threeByTwoSmallAt2X"}, {url: "https://static01.nyt.com/images/2022/04/10/world/10ukraine-scene-promo/10ukraine-scene-top-thumbLarge.jpg", format: "Large Thumbnail"}]},
  //   {id: 4, title: "With India on the fence over Ukraine, Biden meets with Modi.", section: 'world', published_date: "2022-04-11T14:22:54-04:00", byline: "By Mujib Mashal", abstract: "India, heavily dependent on Russian weapons, has long tried not to take sides between Moscow and Washington. It has refrained from denouncing Russia’s invasion or imposing sanctions.", short_url: "https://nyti.ms/3uu3aBr", multimedia: [{}, {url: "https://static01.nyt.com/images/2022/04/11/world/11ukraine-blog-biden-modi/merlin_205355715_82e8f1cc-0a76-4109-a284-3b22b3da5ac9-threeByTwoSmallAt2X.jpg", format: "threeByTwoSmallAt2X"}, {url: "https://static01.nyt.com/images/2022/04/11/world/11ukraine-blog-biden-modi/11ukraine-blog-biden-modi-thumbLarge.jpg", format: "Large Thumbnail"}]},
  //   {id: 5, title: "China’s Echoes of Russia’s Alternate Reality Intensify Around the World", section: 'technology', published_date: "2022-04-11T05:00:25-04:00", byline: "By Paul Mozur, Steven Lee Myers and John Liu", abstract: "China’s officials and state media are increasingly parroting Russian propaganda organs on the war in Ukraine, undercutting U.S. and European diplomatic efforts, even after the killings in Bucha.", short_url: "https://nyti.ms/3xmBJeO", multimedia: [{}, {url: "https://static01.nyt.com/images/2022/04/08/world/00-China-Disinfo-top/00-China-Disinfo-top-threeByTwoSmallAt2X.jpg", format: "threeByTwoSmallAt2X"}, {url: "https://static01.nyt.com/images/2022/04/08/world/00-China-Disinfo-top/00-China-Disinfo-top-thumbLarge.jpg", format: "Large Thumbnail"}]},
  // ])
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BsMhAbdp1Yr9AvsW1w7Iu8RUHTavOe32')
      .then(response => response.json())
      .then(data => setArticles([...data.results]))
  }, [])
  return (
    <div className="App">
      <h1 className="header">Turing Times</h1>
      <Articles articles={articles}/>
    </div>
  );
}

export default App;

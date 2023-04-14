import { useEffect, useState } from 'react';
import './App.css';
import { BsDroplet, BsDropletHalf, BsDropletFill, BsCloudRainHeavyFill } from 'react-icons/bs'
import { TbDropletOff, TbQuestionMark, TbDropletHalf2 } from 'react-icons/tb'

function App() {
  const [percentage, setPercentage] = useState();
  const [word, setWord] = useState();
  const [icon, setIcon] = useState();

  const calcWord = (perc) => {
    if (perc < 5)
      return 'No'
    if (perc < 25)
      return 'Probably not'
    if (perc < 50)
      return 'Perhaps'
    if (perc < 75)
      return 'Probably'
    if (perc < 95)
      return 'Most likely'
    if (perc < 100)
      return 'Yes'
  }

  const calcIcon = (perc) => {
    const size = 140;
    if (perc < 5)
      return <TbDropletOff size={size} />;
    if (perc < 25)
      return <BsDroplet size={size} />;
    if (perc < 50)
    return <BsDropletHalf size={size} />;
    if (perc < 75)
    return <TbDropletHalf2 size={size} />;
    if (perc < 95)
    return <BsDropletFill size={size} />;
    if (perc < 100)
    return <BsCloudRainHeavyFill size={size} />;
  }

  useEffect(() => {
    const getProbability = async () => {
      const api = "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
      const data = await fetch(api);
      const obj = await data.json();
      const percentage = obj.daily.precipitation_probability_max[0];
      const isBetweenZeroAndHundred = /^([1-9]\d|\d|100)$/.test(percentage);
      if (isBetweenZeroAndHundred) {
        setPercentage(percentage);
        setWord(calcWord(percentage));
        setIcon(calcIcon(percentage));
      } else {
        setWord('Something went wrong')
        setIcon(<TbQuestionMark size={140} />)
      }
    };
    getProbability();
  }, [])

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center space-y-10'>
        <h1 className='text-3xl'>Rain?</h1>
        {icon}
        <p>
          <span className='text-3xl font-bold mr-2'>{word && word}</span><span className='text-xl'>{percentage && <>{percentage}%</>}</span>
        </p>
      </div>
    </div>
  );
}

export default App;

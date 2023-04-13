import { useEffect, useState } from 'react';
import './App.css';
import { BsCloudRainHeavy } from 'react-icons/bs'

function App() {
  const [probability, setProbability] = useState();
  const [word, setWord] = useState();

  const calcProbabilityWord = (perc) => {
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

  useEffect(() => {
    const getProbability = async () => {
      const api = "https://api.open-meteo.com/v1/forecast?latitude=59.33&longitude=18.07&daily=precipitation_probability_max&timezone=Europe%2FBerlin";
      const data = await fetch(api);
      const obj = await data.json();
      const percentage = obj.daily.precipitation_probability_max[0];
      setProbability(percentage);
      setWord(calcProbabilityWord(percentage));
    };
    getProbability();
  }, [])

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center space-y-10'>
        <h1 className='text-2xl'>Rain?</h1>
        <BsCloudRainHeavy size={140} alt="rain" />
        <p>
          <span className='text-3xl font-bold mr-2'>{word ? word : 'loading...'}</span><span className='text-xl'>{probability ? <>{probability}%</> : 'loading...'}</span>
        </p>
      </div>
    </div>
  );
}

export default App;

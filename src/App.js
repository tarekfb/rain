import './App.css';
import { BsCloudRainHeavy } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center justify-center space-y-10'>
        <h1 className='text-2xl'>Rain?</h1>
        <BsCloudRainHeavy size={140} alt="rain" />
        <p>
          <span className='text-3xl font-bold mr-2'>Probably</span><span className='text-xl'>58%</span>
        </p>
      </div>
    </div>
  );
}

export default App;

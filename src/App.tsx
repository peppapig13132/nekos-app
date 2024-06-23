import { useState } from 'react';
import GithubCorner from 'react-github-corner';
import './App.css';
import { _endpontsArray } from './utils/constants';
import { AnimeBlock } from './components/AnimeBlock';
import { Tag } from './components/Tag';

function App() {
  const [category, setCategory] = useState<string>('neko');
  const [count, setCount] = useState<number>(5);

  const mine = () => {
    setCategory('feed');
    setCount(3);
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h2 className="my-6 2xl:text-6xl text-5xl font-semibold text-center text-slate-700">
        Nekos App
      </h2>

      <p className="text-slate-700 text-sm text-center">
        Nekos App provides fully SFW and high quality anime images and GIFs.
      </p>

      <div className="flex flex-wrap w-100 my-2">
        {_endpontsArray.map((category, index) => <Tag key={index} name={category[0]} />)}
      </div>

      <div className="w-100 xl:px-12 flex justify-end">
        <button onClick={mine} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center my-2">Click to mine Anime</button>
      </div>

      <AnimeBlock category={category} count={count} />
      
      <p className="mt-12 text-center text-slate-700">Made with ❤️ by <a target="_blank" rel="noreferrer" className="font-semibold" href="https://github.com/peppapig13132">Pepp</a></p>
      <GithubCorner
        href='https://github.com/peppapig13132/Nekos-App'
        size={120}
        bannerColor='#334155'
      />
    </div>
  );
}

export default App;

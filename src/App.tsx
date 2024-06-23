import GithubCorner from 'react-github-corner';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl my-3 text-slate-700">
        Nekos App
      </h2>
      <p className="text-slate-700">
        Nekos App provides fully SFW and high quality anime images and GIFs.
      </p>
      <p className="mt-12 text-slate-700">Made with ❤️ by <a target="_blank" href="https://github.com/peppapig13132">Pepp</a></p>
      <GithubCorner
        href='https://github.com/peppapig13132/Nekos-App'
        size={120}
        bannerColor='#334155'
      />
    </div>
  );
}

export default App;

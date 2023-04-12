// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '../components/Header';
import { Feed } from '../modules/feed';
import './../styles/global.css'

export function App() {
  return (
    <main className="h-screen bg-gray-100">
      <Header/>
      <Feed />
    </main>
  );
}

export default App;

import './Home.css';
// import { mbti } from './data/types';
// import { assignedTypes } from './data/assigned-types';
import CardList from './components/CardList';
// import Card from './components/Card';

function Home() {
  return (
    <>
      <div className='home-title'>MBTI Typedex</div>
      <div className='home-subtitle'>Power of Friendship</div>
      <br></br>
      <CardList />
    </>
  );
}

export default Home;
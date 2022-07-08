import './Home.css';
// import { mbti } from './data/types';
// import { assignedTypes } from './data/assigned-types';
import CardList from './components/CardList';
// import Card from './components/Card';

function Home() {
  return (
    <>
      <div className='header'>
        <div className='home-title'>MBTI Typedex</div>
        <div className='home-subtitle'>Power of Friendship</div>
      </div>
      {/* <div className='card-filters'></div> */}
      <CardList className='card-content'/>
    </>
  );
}

export default Home;
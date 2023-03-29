import './App.css';
import ActivityCard from './Component/ActiviyCard/ActivityCard';
import AllExercise from './Component/AllExercise';




function App() {
  return (
    <div className='flex'>
      <div >
        <h1 className="text-4xl">Active Club</h1>
        <AllExercise></AllExercise>
      </div>
      <div>
        <ActivityCard></ActivityCard>
      </div>
    </div>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Exercise from '../Pages/Exercise';
import ExerciseDetail from '../Pages/ExerciseDetail';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup'
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/exercise" element={
          <ProtectedRoute>
            <Exercise />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
  )
}

export default Router
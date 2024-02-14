import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Question } from './pages/Question'
import { FinishedScreen } from './pages/FinishedScreen';
import { Gender} from './pages/Gender';
import { Age } from './pages/Age';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Main/>}/>
          <Route path='quiz/gender' element={<Gender/>}/>
          <Route path='quiz/age' element={<Age/>}/>
          <Route path='quiz/question' element={<Question/>}/>
          <Route path='results' element={<FinishedScreen/>}/>
        </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App

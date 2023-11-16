import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

const Router = () => {

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/login" element={<LoginView/>} />
        <Route path="/register" element= {<RegisterView />} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default Router

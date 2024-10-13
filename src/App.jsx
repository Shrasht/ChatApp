import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProtectRoute from './auth/ProtectRoute';
import Loaders from './components/styles/layout/Loaders';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));

function App() {
  const [user, setUser] = useState(true); // Initially null, adjust on login

  // Example function for logging in
  const handleLogin = (userData) => {
    setUser(userData); // Set user data on successful login
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<Loaders/>}>
        <Routes>
          {/* Protected routes for authenticated users */}
          <Route  element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>

          {/* Public route for login */}
          <Route 
            path='/login' 
            element={<ProtectRoute user ={!user} redirect='/'>
              <Login/>
              </ProtectRoute> 
            }
          />

          {/* Fallback for undefined routes */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

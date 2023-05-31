import logo from './logo.svg';
import './App.css';
import AuthLayout from './components/layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <div className="App">
      <AuthLayout>

        <RegisterPage/>
        
      </AuthLayout>
    </div>
  );
}

export default App;

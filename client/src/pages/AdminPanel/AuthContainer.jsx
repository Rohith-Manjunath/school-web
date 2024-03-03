
import { useState } from "react";
import image from "../../assets/Images/AdminPaneImages/TVSchool.jpg";
import Login from './Login'; // Import the Login component
import Register from './Register'; // Import the Register component

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleAuth = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover" style={{ backgroundImage: `url(${image})` }}>
      <div className={`w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-white transition-transform transform ${isLogin ? 'rotateY(0deg)' : 'rotateY(180deg)'}`}>
        {isLogin ? (
          <Login onToggleAuth={handleToggleAuth} />
        ) : (
          <Register onToggleAuth={handleToggleAuth} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;

// client/src/views/Home.js
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import tree from './images/tree.jpg';
import video from './bgdVideo.mp4';
import Modal from '../components/Modal';
import FeatureBox from '../components/FeatureBox';
import Quotes from '../components/Quotes';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Team from '../components/Team';
import Sidebar from '../components/Sidebar';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import { useAuth } from '../components/useAuth';
import Navigation from '../components/Navigation';
import io from 'socket.io-client';



function Dashboard() {
  const { user, logout, initializeAuth }= useAuth();
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  
  const socket = io('http://localhost:5000/');

  //useEffect(() => {
    //initializeAuth();
  //}, [initializeAuth]);

  // useEffect(() => {  
    if (!user) {
      // Handle user not being logged in.
      navigate('/');
      return null;
    }
  // }, [user, navigate]);

  const openLoginModal = () => {setLoginModalOpen(true);};
  const closeLoginModal = () => {setLoginModalOpen(false);};

  const openSignupModal = () => {setSignupModalOpen(true);};
  const closeSignupModal = () => {setSignupModalOpen(false);};
  
  const openTaskModal = () => {setTaskModalOpen(true);};
  const closeTaskModal = () => {setTaskModalOpen(false);};
  
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation openLoginModal={openLoginModal} user={user} logout={logout} />

      {/* Sidebar */}
      <div className="flex">
        {/* Sidebar component with user and logout handling */}
        <Sidebar user={user}>

        {/* Main content */}
        <div className="flex-grow p-4">
	   <Routes>
            <Route path="/home">Home Page</Route>
            <Route path="/profile">Profile Page</Route>
            <Route path="/tasks">Tasks Page</Route>
            <Route path="/chat">Chat Page</Route>
            <Route path="/settings">Settings Page</Route>
	  </Routes>
        </div>
	</Sidebar>
      </div>


      {/* Background Video Section */}
      <div className="relative h-full w-full">
        <video
          className="object-cover h-full w-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4">AccountaHub</h1>
          <p className="text-lg">Empower! Inspire! Succeed!</p>
        </div>
      </div>

     <div className="w-full h-32 bg-gradient-to-b from-blue-400 to-purple-400 rounded-b-3xl shadow-lg">
      {/* Content goes here */}
    </div><br /><br />


      {/* Conditionally render the login form */}
	{isLoginModalOpen && (
          <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
	  {/* LoginForm component here */}
	    <Login />
	    </Modal>
	 )}
	
	{/* Conditionally render the Signup form */}
	{isSignupModalOpen && (
	  <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
           {/* SignupForm component here */}
           <Signup />
          </Modal>
	)}

      <div><h1>AccountaHub</h1>
        <p>Empower. Inspire. Succeed. Join us for mentorship, goal-setting, and community support, where every journey leads
 to greatness.</p></div>

<br /><br /><br />

<p>Welcome, {user.firstName}. We are here to help you stay accountable and achieve your goals.</p>

<br /><br /><br />
     <TaskList socket={socket} user={user} />
<br /><br /><br />

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={tree} alt="Modern building architecture" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
<br /><br /><br />

    <FeatureBox
        image="/images/tree.jpg"
        title="Company retreats 1"
        description="Your custom description for box 1."
        linkHref="#" // Link 1
        swapPositionsOnLargeScreen={true}
      /><br /><br /><br />
      <FeatureBox
        image="/images/tree.jpg"
        title="Company retreats 2"
        description="Your custom description for box 2."
        linkHref="#" // Link 2
        swapPositionsOnLargeScreen={false}
      /><br /><br /><br />
      <FeatureBox
        image="/images/tree.jpg"
        title="Company retreats 3"
        description="Your custom description for box 3."
        linkHref="#" // Link 3
        swapPositionsOnLargeScreen={true}
      /><br /><br /><br />

      <FeatureBox                                                     image="/images/flower.png"                                      title="Company retreats 3"                                    description="Do not go alone."
	  linkHref="#"
	  swapPositionsOnLargeScreen={true}                           /><br /><br /><br />

      <Team /> <br /><br />
      <Quotes /><br /><br />
	
    </div>
  );
}

export default Dashboard;

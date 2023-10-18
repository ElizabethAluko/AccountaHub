// client/src/views/Home.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import tree from './images/tree.jpg';
import video from './bgdVideo.mp4';
import Modal from '../components/Modal';
import FeatureBox from '../components/FeatureBox'
import Quotes from '../components/Quotes'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Team from '../components/Team'
import Sidebar from '../components/Sidebar'


function Home() {
  const user = {
    username: 'JohnDoe',
    avatar: 'images/lizy.jpg',
  };

  // Define a function to handle user logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };
  
  return (
    <div>
      {/* Sidebar */}
      <div className="flex">
        {/* Sidebar component with user and logout handling */}
        <Sidebar user={user} handleLogout={handleLogout} />

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

          <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700" onClick={openSignupModal}>
            Start for Free
          </button>
        </div>
      </div>

      {/* Conditionally render the login form */}
	{isLoginModalOpen && (
          <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
	  {/* LoginForm component here */}
	    <Login />
	    </Modal>
	 )}
	
	{/* Conditionally render the Signup form */}
	{isSignupModalOpen && (
	  <Modal isOpen={isSignupModalOpen} onClose={() => setSignupModalOpen(false)}>
           {/* SignupForm component here */}
           <Signup />
          </Modal>
	)}

      <div Style="background-color: grey"><h1>AccountaHub</h1>
        <p>Empower. Inspire. Succeed. Join us for mentorship, goal-setting, and community support, where every journey leads
 to greatness.</p></div>

<br /><br /><br />

<p>We are here to help you stay accountable and achieve your goals.</p>

<br /><br /><br />

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

export default Home;

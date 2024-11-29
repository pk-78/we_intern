import ReviewCard from "./components/reviewCard";
import Header from "./components/header";
import Cards from "./components/Cards";
import Main from "./components/Main";
import BinaMtlab from "./components/BinaMatlab";
import Hower from "./components/Hower";
import Footer from "./components/Footer";
import './index.css'
function App() {


  return (

    <div className="mt-0 gap-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 h-screen">
     <div className="my-0"> <Header/></div>
     <div><Main/></div>
     <div className="my-5 mx-8 gap-8 grid grid-cols-3 ">
      <Cards name="Web Development" image="https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png"/>
      <Cards name="UI & UX Design" image="https://codehelp-apis.vercel.app/get-top-courses/Design/User%20Experience%20Design.png"/>
      <Cards name="Software Testing" image="https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png"/>
      <Cards name="App Development" image="https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png"/>
      <Cards name="DevOps" image="https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png"/>
      <Cards name="Project management" image="https://codehelp-apis.vercel.app/get-top-courses/Business/Project%20Management%20Essentials.png"/>
      
     </div>
     <div><BinaMtlab/></div>
     <div className="flex space-x-2 my-2 mx-12 gap-8 grid grid-cols-3">
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
     </div>
     <div><Hower/></div>
     <div><Footer/></div>
    </div>
  )
 
}

export default App;

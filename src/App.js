import React from "react";
import { Route, Routes, Navigate, Outlet} from "react-router-dom";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import Homepage from "./pages/homepage/homepage.component";
import Header  from "./components/header/header.component";
import {auth, createUserProfileDocument, onAuthStateChanged} from './firebase/firebase.utils';
import {onSnapshot} from 'firebase/firestore';
import MenuPage from "./pages/menu/menu.component";
import Footer from './/components/footer/footer.component';
class App extends React.Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }
  unsubscribeFromAuth= null;
  componentDidMount(){
    // The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

this.unsubscribeFromAuth = onAuthStateChanged(auth, async(userAuth) => {
  if(userAuth){
    const userRef = await createUserProfileDocument(userAuth);

    // You can listen to a document with the onSnapshot() method. An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. Then, each time the contents change, another call updates the document snapshot. this helps in getting real time updates with cloud firestore.
    onSnapshot(userRef, (snapShot) => {
      this.setState({
        currentUser: {
          id: snapShot.id,
          ...snapShot.data()
        }
      })
      console.log(this.state);
    })
  }
  this.setState({ currentUser: userAuth})
})
}

  componentWillUnmount(){
this.unsubscribeFromAuth();
  }

  render() {

     
    return (
      <div>
        <Header  currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path ='/' element ={<Homepage/>} />
            <Route exact path="/coffee-house" element={<Homepage/>} />
            <Route exact path="/menu" element={<MenuPage/>} />
         <Route exact path = '/signin' 
         element={this.state.currentUser 
         ? <Navigate to='/' />
         :<SignInAndSignUpPage/>} 
         />


        </Routes>
        <Footer />
      </div>
    );
  }
}
{/* const ProtectedRoute = ({currentUser}) => {
  
 return currentUser ? : (<Outlet/>)
} */}
 
export default App;
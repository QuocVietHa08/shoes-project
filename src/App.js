import './App.scss';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/Body/Checkout/Checkout';
import Login from './component/Body/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './component/Body/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Body/Orders/Orders';
const promise = loadStripe(
  'pk_test_51ILUJEI95v2mAhMo3bt4Ffu24Gc8oBtEHI644LUQJFqxy39QSQqSagxYRoUB6sooyEIwvEAsQkbhZJIAJNk7RQCi001p310oTY'
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app loads
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login'>
            <Header></Header>
            <Login />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header></Header>
            <Checkout />
            <Footer />
          </Route>{' '}
          <Route path='/payment'>
            <Header></Header>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>{' '}
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/'>
            <Header />
            <Body />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

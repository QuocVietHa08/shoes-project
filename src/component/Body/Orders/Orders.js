import React, { useEffect, useState } from 'react';
import './Orders.scss';
import { db } from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import Order from './Order/Order';
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    console.log('this user from order', user);
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('basket')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      console.log('this is order', orders);
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className='orders'>
      <h2>Orders</h2>
      <div className='orders__order'>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

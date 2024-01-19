// HistoryPage.js
import React from 'react';
import HistoryOrder from '../components/HistoryModule/HistoryOrder';
import UpdateProfile from '../components/ManageProfile/UpdateProfile';

const History = () => {
  return (
    <div>
      <HistoryOrder />

      <UpdateProfile />

    </div>
  );
};

export default History;

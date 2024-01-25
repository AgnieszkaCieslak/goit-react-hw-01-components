import css from './App.module.css';
// import css from './App.css';

import { Profile } from './Profile/profile';
import { Statistics } from './Statistic/statistic';
import { FriendList } from './Friends/friendList';
import { TransactionHistory } from './Transaction/transaction';

import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transaction.json';

export const App = () => {
  return (
    <div className={css.body}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


//---------ORYGIANAL ----------
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

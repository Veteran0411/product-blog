
import './App.css';
import OrderedList from './OrderedList';
import APICalling from './APICalling';
import Test from './Test';
// import UserList from './components/UserList';
import SearchUser from './components/UserList';
import SearchTodo from './components/TodoList';



function App() {
  return (
    <div>
      {/* <OrderedList name={"orderedList"} /> */}
      <APICalling />
      {/* <Test/> */}
      {/* <SearchUser/>
      <SearchTodo/> */}
      {/* <Provider store={store}>
      <MyComponent/>
      </Provider> */}
    </div>

  );
}

export default App;

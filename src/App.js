import {ChatEngine} from 'react-chat-engine'
import  ChatFeed from './Components/ChatFeed'
import './App.css';
import LoginForm from './Components/LoginForm';

function App() {

  if(!localStorage.getItem('username')){
    return <LoginForm />
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="1cd26d31-2e49-4b73-8af4-33ce53090f94"
      // userName="test"
      // userSecret="123123"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      //lets us render our own component for the entire chatfeed
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;

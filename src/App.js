import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import StudentView from "./Components/Students/StudentView";
import Navbar from "./Components/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./Components/Students/AddStudent";
import EditStudent from "./Components/Students/EditStudent";
import Login from "./Components/common/Login";
import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import Header from "./Components/common/Header";
import Post from "./Components/Post";
import PostList from "./Components/common/PostList";
import postReducer from "./Components/Reducer";

export let UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const [user, setUser] = useState("");
  // const [posts, setPosts] = useState([]);
  const initialPostState = useContext(PostContext);

  const [state, dispatch] = useReducer(postReducer, initialPostState);

  // const handleAddPost= useCallback(
  //   newPost => {
  // setPosts([newPost,...posts]);
  // },[posts])

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please Login!!!";
  }, [user]);
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <main className="container mt-5">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentView />}></Route>
          <Route exact path="/add-students" element={<AddStudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}
          ></Route>
        </Routes>
      </Router> */}
      <PostContext.Provider value={{state,dispatch}}>
        <UserContext.Provider value={user}>
          <Header user={user} setUser={setUser} />
          <Post
            user={user}
            //  handleAddPost= {handleAddPost}
          />
          <PostList posts={state.posts} />
        </UserContext.Provider>
      </PostContext.Provider>
    </main>
  );
}

export default App;

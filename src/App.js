import logo from './logo.svg';
import './App.css';
import BlogPosting from './Blogposting';

function App() {
  return (
    <div className="App">
      <header>
            <div class ="header-container">
                <div class = "circle">
                    <img src="images/ishatemple.jpg"/>
                </div>
                
                <h1>My Simple Blog</h1>
            </div>
           
           </header>
        <BlogPosting/>
    </div>
  );
}

export default App;

import "../css/study.css";

const Study = () => {
  const logo = require('../images/array.png');
  return (
    <div class="wrapper">
    <div class="title">Study</div>
    <section class="study">
      <div class="container">
            <div class="box">
                <img class="img1" />
                <h3>Arrays</h3>
                <p>project description</p>
                <a href="#" class="btn">More</a>
            </div>
            <div class="box">
                <img class="img2" />
                <h3>Hash Tables</h3>
                <p>project description </p>
                <a href="#" class="btn">More</a>
            </div>
            <div class="box">
                <img class="img3" />
                <h3>Trees</h3>
                <p>project description </p>
                <a href="#" class="btn">More</a>
            </div>
            <div class="box">
                <img class="img4" />
                <h3>Graphs</h3>
                <p>project description </p>
                <a href="#" class="btn">More</a>
            </div>
            <div class="box">
                <img class="img5" />
                <h3>Dynamic Programming</h3>
                <p>project description </p>
                <a href="#" class="btn">More</a>
            </div>
            <div class="box">
                <img class="img6" />
                <h3>Backtracking</h3>
                <p>project description </p>
                <a href="#" class="btn">More</a>
            </div>
        </div>
      
    </section>    
    </div>
  )
};

export default Study;
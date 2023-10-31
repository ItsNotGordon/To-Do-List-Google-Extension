import React from 'react'
function MainPage() {
    return (
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">To-Do List</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              A collection of tasks that requires attention
              <img src = "https://i.giphy.com/media/Fj047NLfO9zYY7Fdax/giphy.webp" alt="to-do list gif"></img>
            </p>
          </div>
        </div>
      );
  }

  export default MainPage;

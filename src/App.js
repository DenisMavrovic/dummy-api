import "./App.css";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
      const getPhones = async () => {
        const res = await fetch(
          'https://dummyjson.com/products/search?q=phone'
        );
        const data = await res.json();
        setItems(data.products);
        console.log(data.products);
      };      
      
      getPhones();
      
      
  },[]);

  const handlePageclick = async (data) => {

    console.log(data.selected + 1);

  }

  return (
    <div className="container">
    <div className="row m-2">
      {items.map((item) => {
        return (
          <div key={item.id} className="col-sm-6 col-md-4 v my-2">
            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
              <div className="card-body">
                <h5 className="card-title text-center h2">Product name: {item.title} </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  {item.discountPercentage} $
                </h6>
                <img src={item.images[0]} alt={item.description} width="250" height="225" />                 
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

      <ReactPaginate
      previousLabel={'<< previous'}  
      nextLabel={'next >>'}
      breakLabel={'...'}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageclick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      />
    </div>
    
  );
}

export default App;

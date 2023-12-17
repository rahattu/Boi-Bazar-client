import { Link } from "react-router-dom";





const CardShop = ({ brand }) => {
 

 
 
  const { name, author, rating, category, image} = brand;
  
   // Extract pdfurl from the image object


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <button className="btn btn-success">author: {author}</button>
          <button className="btn btn-light">category: {category}</button>
          <button className="btn btn-info">rating: {rating}</button>

          <div className="card-actions">
         

          <Link to="https://www.audisankara.ac.in/has/pdf/DATA%20STRUCTURE.pdf">
      <a className="bg-orange-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
        Read me
      </a>
    </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShop;

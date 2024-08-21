import React from 'react';
import classes from './BookList.module.css';

class BookList extends React.Component {
   render() {
      const pageTitle = "Books I Read Every Year";
      let book1 = "A Court of Thorns and Roses by Sarah J. Maas";
      let book2 = "Throne of Glass by Sarah J. Maas";
      let book3 = "City of Bones by Cassandra Clare";
      let book4 = "Shatter Me by Tahereh Mafi";
      return (
         <div>
            <h3 classname={classes.bookHeading}>{pageTitle}</h3>
            <li className={classes.bookText}>{book1}</li>
            <li className={classes.bookText}>{book2}</li>
            <li className={classes.bookText}>{book3}</li>
            <li className={classes.bookText}>{book4}</li>
            <div2>
               <img src={"https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_UF1000,1000_QL80_.jpg"} alt="A Court of Thorns and Roses by Sarah J. Maas" />
               <img src={"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1673566495i/76703559.jpg"} alt="Throne of Glass by Sarah J. Maas" />
               <img src={"https://m.media-amazon.com/images/I/81CXrM8yIqL._AC_UF1000,1000_QL80_.jpg"} alt="City of Bones by Cassandra Clare" />
               <img src={"https://m.media-amazon.com/images/I/81RxMMXUnFL._AC_UF1000,1000_QL80_.jpg"} alt="Shatter Me by Tahereh Mafi" />
            </div2>
         </div >
      )
   }

};

export default BookList;
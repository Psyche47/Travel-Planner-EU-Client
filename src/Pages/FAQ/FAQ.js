import React from "react";
import { ListGroup } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="container mt-3">
      <h2 className="bg-dark text-white text-center p-2 mt-2 ">
        Frequently asked questions!
      </h2>
      <ListGroup>
        <ListGroup.Item>
          1. How do I receive confirmation of my booking?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: You'll receive an email asking you to confirm your booking
        </ListGroup.Item>
        <ListGroup.Item>2. What is the refund policy?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: In case of cancellation, you'll get your money back within 7
          days.
        </ListGroup.Item>
        <ListGroup.Item>3. How will I be provided safety?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Our Tour guides are experienced and know the areas really well.
          In case of any emergencies, they are well equipped to handle it.
        </ListGroup.Item>
        <ListGroup.Item>4. What kind of plane seats will I get?</ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: There are different packages based on price. They are: a.
          Business, b. Economy, and c. General
        </ListGroup.Item>
        <ListGroup.Item>
          5. Do I get return tickets with my booking?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Return tickets are provided with out premium packages.
        </ListGroup.Item>
        <ListGroup.Item>
          6. What types of Credit Cards are accepted?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: We accept Discover, American Express, Visa, MasterCard and Diners
          Club. Your current billing address and phone information must be
          included with every order.
        </ListGroup.Item>
        <ListGroup.Item>
          7. Once I’ve begun my trip, who should I contact for help?
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          Ans: Once your journey has commenced, it is advisable to get in touch
          with the Airline or service provider in the city/country where you are
          situated.
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default FAQ;

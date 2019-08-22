import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem laborum qui, magnam
      corporis expedita voluptatibus id ipsam excepturi molestias perferendis cupiditate in eaque ea
      mollitia, alias atque tenetur enim tempora soluta laboriosam. Sequi odit facilis nobis dolore
      obcaecati quo? In minima et possimus, hic atque ut obcaecati rem quaerat?
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;

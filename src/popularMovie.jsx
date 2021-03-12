import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heart } from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";

const PopularMovie = ({liked, id, status}) => {

	let conditionClass = status === true ? solidHeart : heart;
	return (
    <FontAwesomeIcon
      onClick={() => liked(id)}
      icon={conditionClass}
      size="2x"
      id="like"
    />
  );
}

export default PopularMovie;
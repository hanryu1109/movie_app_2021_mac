import React from "react";
import PropTypes from "prop-types";

// function renderFood(dish) {
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />
// }

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id:2,
    name: "bulgogi",
    image: "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM",
    rating: 3.2
  },
  {
    id:3,
    name: "kimbap",
    image: "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM",
    rating: 2.7
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.9
  }  
]

function Food({ name, picture, rating }) {
  return<div>
          <h1>I love {name}</h1>
          <h4>Rating : {rating}/5</h4>
          <img src={picture} alt={name}></img>
        </div> 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
 
function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {/* <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" /> */}
      {/* Food component에 fav라는 이름의 property를 kimchi 라는 value로 준거야 */}
      {/* jsx는 단지 HTML + JavaScript */}

      { foodILike.map(dish => (
        <Food 
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      {/* 위 코드에서 dish 는 object */}

      {/* {console.log(foodILike.map(renderFood))} */}
    </div>
  )
}

export default App;

// const friends = ["Riaz", "Tajwiddin", "Imran", "Munna"];

// const friendsExtends = [...friends, "Rana"];

// console.log(friends);
// console.log(friendsExtends);

// function curring
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(5)(3)(2));

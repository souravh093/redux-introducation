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

const label = add(1);

console.log(label(2)(3))

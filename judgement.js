function get_achievement(x, y, z){
  let sum = x + y + z;
  if(sum >= 250){
    return "あなたの成績はAです！";
  } else if(sum >= 200) {
    return "あなたの成績はBです！";
  } else {
    return "あなたの成績はCです！";
  }
};

console.log(get_achievement(60,100,40));

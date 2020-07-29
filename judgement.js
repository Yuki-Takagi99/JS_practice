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

function get_pass_or_failure(x, y, z){
  if(x >= 60 && y >= 60 && z >= 60){
    return "合格です！おめでとうございます！"
  } else {
    return "残念ながら不合格です。"
  }
};

console.log(get_pass_or_failure(60,100,60));
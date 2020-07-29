function get_achievement(x, y, z){
  let sum = x + y + z;
  if(sum >= 250){
    return "A";
  } else if(sum >= 200) {
    return "B";
  } else {
    return "C";
  }
};

function get_pass_or_failure(x, y, z){
  if(x >= 60 && y >= 60 && z >= 60){
    return "合格です！おめでとうございます！"
  } else {
    return "残念ながら不合格です。"
  }
};

function judgement(x, y, z) {
  let achievement = get_achievement(x,y,z)
  let pass_or_failure = get_pass_or_failure(x,y,z)
  return `あなたの成績は${achievement}です！${pass_or_failure}`;
};

console.log(judgement(60,100,60));
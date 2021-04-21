function reverse(str) {
  let str2 = '';
  for (i = str.length -1; i >= 0; i--){
      str2 += str[i]
  }
  console.log(str2)
}

reverse('1,2,3,2,1');

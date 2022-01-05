const getArgs = (args) => {
  const res = {}

  //рест это массив который не содержит первых друх элементов
  const [executer, file, ...rest] = args

  rest.forEach((value, index, array) => {

    //если первый элементы дефис
    if(value.charAt(0) == '-') {

      //если дошли до последнего элемента
      if(index == array.length - 1) {
        res[value.substring(1)] = true
      }

      //если первый элемент дефис и следующий за ним НЕ дефис
      else if(array[index + 1].charAt(0) != '-') {
        //откидываем дефис от value (это ключ в объекте res)
        res[value.substring(1)] = array[index + 1]
      }

      else {
        res[value.substring(1)] = true
      }
    }
  })


  // получим в res { s: true, h: true } или { s: 'moscds', h: 'шаопшвщп' }
  return res
}

export { getArgs }


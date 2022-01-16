import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + '' + error)
}

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(' SUCCESS ') + '' + msg)
}

const printHelp = () => {
  console.log(
      dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки погоды
        -h для вывода помоощи
        -t [API_KEY] для сохранения токена`
  )
}

//то что получили от апи придет сюда
const printWeather = (res, icon) => {
  console.log(
      dedent`${chalk.bgCyanBright(' WEATHER ')} Погода в городе: ${res.name.toUpperCase()}
        ${icon} ~ ${res.weather[0].description.toUpperCase()}
        Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        Скорость ветра: ${res.wind.speed}`
  )
}

export { printError, printSuccess, printHelp, printWeather }

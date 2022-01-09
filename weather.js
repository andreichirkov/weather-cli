#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передан токен')
    return
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Токен сохранен')
  } catch (e) {
    printError(e.message)
  }
}

const getForecast = async () => {
  try {
    const weather = await getWeather(process.env.CITY)
    console.log(weather)
  } catch (e) {
    //аксиос дает сообщение об ошибке
    if (e?.response?.status === 404) {
      printError('Неверно указан город')
    } else if (e?.response?.status === 401) {
      printError('Неверно указан токен')
    } else {
      printError(e.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  // console.log(args)

  if(args.h) {
    //вывод help
    printHelp()
  }

  if(args.s) {
    //сохранить город

  }

  if(args.t) {
    //сохранить токен
    return saveToken(args.t)
  }

  //вывести погоду
  getForecast()
}

initCLI()


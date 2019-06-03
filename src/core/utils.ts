import * as path from 'path'
import { Global } from '.'

export function getKeyname (keypath: string) {
  const keys = keypath.split(/\./g)
  if (!keys.length)
    return ''
  return keys[keys.length - 1]
}

export function getFileInfo (filepath: string) {
  const info = path.parse(filepath)

  let locale = Global.normalizeLng(info.name, '')
  let nested = false
  if (!locale) {
    nested = true
    locale = Global.normalizeLng(path.basename(info.dir), '')
  }
  if (!locale)
    console.error(`Failed to get locale on file ${filepath}`)

  return {
    locale,
    nested,
  }
}

export function notEmpty<T> (value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function replaceLocalePath (filepath: string, targetLocale: string): string {
  const info = path.parse(filepath)

  if (Global.normalizeLng(info.name, ''))
    return path.resolve(info.dir, `${targetLocale}${info.ext}`)

  if (Global.normalizeLng(path.basename(info.dir), ''))
    return path.resolve(path.dirname(info.dir), targetLocale, `${info.name}${info.ext}`)

  return ''
}

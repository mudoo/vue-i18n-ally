import { flatten } from 'lodash'
import { ExtensionModule } from '../modules'
import configLocalesAuto from './configLocalesAuto'
import configDisplayLanguage from './configDisplayLanguage'
import configLocalesGuide from './configLocalesGuide'
import keyManipulations from './keyManipulations'
import debug from './debug'

export * from '../core/Commands'

const m: ExtensionModule = (ctx) => {
  return flatten([
    configLocalesAuto(ctx),
    configDisplayLanguage(ctx),
    configLocalesGuide(ctx),
    keyManipulations(ctx),
    debug(ctx),
  ])
}

export default m

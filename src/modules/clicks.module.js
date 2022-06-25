import {Module} from '../core/module'
import {createCountClick} from 'src/util_func_clickModule'

export class ClicksModule extends Module {
   constructor() {
       super('click', 'Аналитика кликов');
   }
   trigger() {
    createCountClick()
   }
}
import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('0','Wade Warren','/img/avatar.png')
  let dateFrom : Date = new Date();
  dateFrom.setDate(dateFrom.getDate()+1);
  let dateTo : Date = new Date();
  dateTo.setDate(dateTo.getDate()+3);
  renderSearchFormBlock(dateFrom, dateTo)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

import { renderBlock, formatDateForInputValue } from './lib.js'

export function renderSearchFormBlock (dateFrom: Date, dateTo: Date) {
  
  let maxDateTo : Date = new Date(dateTo);
  maxDateTo.setMonth(maxDateTo.getMonth()+2);
  maxDateTo.setDate(0);
  let maxDateFrom : Date = new Date(maxDateTo);
  maxDateFrom.setDate(maxDateFrom.getDate()-2);
  
    renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${formatDateForInputValue(dateFrom)}" min="${formatDateForInputValue(new Date())}" max="${formatDateForInputValue(maxDateFrom)}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatDateForInputValue(dateTo)}" min="${formatDateForInputValue(dateTo)}" max="${formatDateForInputValue(maxDateTo)}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

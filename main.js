import './style.scss'
import { setupCounter } from './counter.js'

document.querySelector('#planet').innerHTML = `
  <div class="row">
    <div class="column planet-image"></div>
    <div class="column data">
      <div class="title"></div>
      <div class="description"></div>
      <div class="source"></div>
      <button>01 Overview</button>
      <button>02 Internal Structure</button>
      <button>03 Surface Geology</button>
    </div>
  </div>
  <div class="row">
    <div class="card rotation">
      <div class="card-title"></div>
      <div class="card-value">
        <div class="value"></div>
        <div class="unit"></div>
      </div>
    </div>
    <div class="card revolution">  
      <div class="card-title"></div>
      <div class="card-value">
        <div class="value"></div>
        <div class="unit"></div>
      </div>
    </div>
    <div class="card radius">
      <div class="card-title"></div>
      <div class="card-value">
        <div class="value"></div>
        <div class="unit"></div>
      </div>
    </div>
    <div class="card average">
      <div class="card-title"></div>
      <div class="card-value">
        <div class="value"></div>
        <div class="unit"></div>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))

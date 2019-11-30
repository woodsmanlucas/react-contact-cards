import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Card from './Card'
import * as serviceWorker from './serviceWorker'

var list = [{ name: 'Michelle', number: '+123 345 789', email: 'michelle@obama.com' },
  { name: 'Robert', number: '+678 342 927', email: 'Robert@denero.com' },
  { name: 'Opera', number: '+1 (604) 683-0222', email: 'opera@opera.com' }]

var cards = list.map((contact) => <Card key={contact.name} name={contact.name} number={contact.number} email={contact.email} />)

ReactDOM.render(<div>
  {cards}
                </div>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

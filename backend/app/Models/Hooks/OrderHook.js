'use strict'

const Ws = use('Ws')

const OrderHook = (exports = module.exports = {})

OrderHook.method = async modelInstance => {}

OrderHook.sendWs = async order => {
  let response = Ws.getChannel('orders')
  response = response.topic('orders')
  if (response) {
    response.broadcast('new:order', order)
  }
}

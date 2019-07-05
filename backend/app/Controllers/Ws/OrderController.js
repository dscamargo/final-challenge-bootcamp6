'use strict'

class OrderController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = OrderController

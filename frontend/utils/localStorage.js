import Cookies from 'js-cookie'

function Local(name) {
  this.set = function (item, val) {
    let millisecond = new Date().getTime();
    let expiresTime = new Date(millisecond + 60 * 1000 * 15);
    Cookies.set(item, JSON.stringify(val), { expires: expiresTime })
  }
  this.get = function (item) {
    let val = ''
    try {
      val = JSON.parse(Cookies.get(item))
      // val = JSON.parse(localStorage.getItem(item))
    } catch (error){
      // console.log(error)
      val = ''
    }
    return val
  }
  this.remove = function (item) {
    Cookies.remove(item)
    // localStorage.removeItem(item)
  }
  this.clear = function () {
    // localStorage.clear()
    let cookies = Cookies.get()
    for(let item in cookies){
      Cookies.remove(item)
    }
  }
}

export const user = new Local('user')

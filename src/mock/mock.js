const swiper = require('./cookbook-list.json')
const hotcate = require('./cookbook-hotcate.json')
const cate = require('./cookbook-category.json')

const profile = require('./profile-mock/user-name.json')

module.exports = function() {
  return {
    swiper,
    hotcate,
    cate,
    profile
  }
}
const Mock = require('mockjs')
const express = require('express')
const router = express.Router()
router.use('/profile', function(req, res) {
  //调用mock方法模拟数据
  const { username, password } = req.body
  const token = req.get('token')
  if (token) {
    console.log('有token,直接返回')
    res.send({
      menu: [1, 2, 4, 5, 6, 8, 9],
      token,
    })
  } else if (username == 'admin' && password == '123') {
    console.log('admin账户登录')
    res.send({
      token: Mock.Random.guid(),
      menu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    })
  } else {
    res.send({
      error: '用户名或密码错误',
    })
  }
})

module.exports = router

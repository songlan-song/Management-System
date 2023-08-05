import Mock from 'mockjs'
import homeApi from './mockSeverData/home'
import user from './mockSeverData/user'
import permission from './mockSeverData/permission'

Mock.mock('/api/home/getData','get',homeApi.getStaticticalData)

Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post', permission.getMenu)
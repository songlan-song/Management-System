<template>
    <div class="wrap">
        <div class="container">
            <div class="bg">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="glass">
                <el-form ref='form' class="login-container" :model="form" :rules="rules" inline="true">
                    <div class="text">login</div>


                    <div class="inputContainer">
                        <el-form-item prop="username">
                        <input class="input" v-model="form.username" type="text" placeholder="Username" />
                    </el-form-item>
                        <el-form-item prop="password">
                        <input class="input" v-model="form.password" type="password" placeholder="Password" />
                    </el-form-item>
                    </div>


                    <el-form-item>
                        <el-button class=button @click="submit">→</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template> 

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import router from '../router'
import { getMenu } from '../api'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
export default {
    data() {
        return {
            store: useStore(),
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: 'Plsease enter the username' }
                ],
                password: [
                    { required: true, trigger: 'blur', message: 'Plsease enter the password' }
                ]
            }
        }
    },
    methods: {
        submit() {
            //     //token信息
            //    const token= Mock.Random.guid()
            //    //讲token信息存入cookie用于不同页面间的通信
            //    Cookie.set('token',token)

            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data);
                        if (data.code === 200) {
                            Cookie.set('token', data.data.token)
                            this.$store.commit('tab/setMenu', data.data.menu)
                            this.$router.push('/home')
                        } else { ElMessage.error('Wrong password.') }
                    })
                }
            })


        }
    }
}

</script>

<style scoped>
.container {
    width: 800px;
    height: 800px;
    margin: 0 auto;
    position: relative;
}

.wrap {
    background-color: #222;
    width: 100%;
    height: 100%;
}

.glass {
    position: absolute;
    width: 360px;
    height: 480px;
    top: 160px;
    left: 220px;
    border-radius: 20px;
    color: #eee;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4px);
    box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3),
        2px 2px 15px rgba(0, 0, 0, 0.5);
    animation: am3 ease-in-out 1s 0.2s backwards;
    transition: box-shadow 0.3s ease, backdrop-filter 0.3s ease;

}

.bg {
    position: absolute;
    width: 800px;
    height: 800px;
    top: 0;
    left: 0;
    animation: am2 ease-out 1s;
}

.input {
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid #666;
    width: 280px;
    height: 45px;
    color: #eee;
    font-size: 18px;
    margin-top: 60px;
}
.inputContainer{
    margin-left: 34px;
}

.text {
    display: inline-block;
    font-size: 26px;
    margin-left: 34px;
    margin-top: 50px;
}

.button {
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: #eee;
    font-weight: bold;
    font-size: 28px;
    margin-left: 145px;
    margin-top: 40px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 2px 10px #111;
    transition: width 0.3s ease, border-radius 0.3s ease, margin-left 0.3s ease, box-shadow 0.3s ease;
}

span {
    background: #fff;
    position: absolute;
    top: 117px;
    left: 143px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: 1px 1px 50px #000;
}

span:nth-child(1) {
    top: 117px;
    left: 143px;
    width: 120px;
    height: 120px;
    background: purple;
    animation: am1 ease-in-out 3s infinite alternate;
}

span:nth-child(2) {
    top: 518px;
    left: 434px;
    width: 200px;
    height: 200px;
    background: orange;
    animation: am1 ease-in-out 4s infinite alternate-reverse;
}

span:nth-child(3) {
    top: 196px;
    left: 483px;
    width: 60px;
    height: 60px;
    background: cyan;
    animation: am1 ease-in-out 2.5s 0.5s infinite alternate;
}

@keyframes am1 {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-30px)
    }
}

@keyframes am2 {
    0% {
        transform: scale(0, 0) rotateZ(60deg);
    }

    100% {
        transform: scale(1, 1) rotateZ(0);
    }

}

@keyframes am3 {
    0% {
        transform: translateY(8px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.glass:hover {
    box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.9),
        4px 4px 25px rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(7px);
}

.button:hover {
    width: 160px;
    border-radius: 70px;
    margin-left: 105px;
    box-shadow: 0px 0px 10px #999, inset 0px 0px 5px #333;
}</style>
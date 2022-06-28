<template>
  <div class="login">
    <a-row type="flex" justify="center" align="middle" class="box">
      <a-col :span="6">
        <div class="content">
          <a-row type="flex" justify="center" align="middle">
            <a-col :span="22">
              <div class="content_title">后台管理系统</div>
            </a-col>
            <a-col :span="22">
              <a-form
                ref="formRef"
                :wrapper-col="wrapperCol"
                :model="formState"
                name="normal_login"
                class="content_form"
                autocomplete="off"
                @finish="onFinish"
                @finishFailed="onFinishFailed"
              >
                <!-- 用户名 -->
                <a-form-item v-bind="validateInfos.username">
                  <a-input
                    v-model:value="formState.username"
                    class="from-input"
                    placeholder="账号"
                  >
                    <template #prefix>
                      <UserOutlined class="site-form-item-icon" />
                    </template>
                  </a-input>
                </a-form-item>
                <!-- 密码 -->
                <a-form-item v-bind="validateInfos.password">
                  <a-input-password
                    v-model:value="formState.password"
                    class="from-input"
                    placeholder="密码"
                  >
                    <template #prefix>
                      <LockOutlined class="site-form-item-icon" />
                    </template>
                  </a-input-password>
                </a-form-item>
                <!-- 记住我 -->
                <a-form-item name="remember">
                  <a-checkbox v-model:checked="formState.remember"
                    >记住我</a-checkbox
                  >
                </a-form-item>
                <!-- 登录按钮 -->
                <a-form-item>
                  <a-button
                    block
                    type="primary"
                    html-type="submit"
                    class="content_submit"
                    @click.prevent="onSubmit"
                  >
                    登录
                  </a-button>
                </a-form-item>
              </a-form>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { Form, notification } from "ant-design-vue";
import axios from "axios";

const useForm = Form.useForm;

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const openNotification = (msg: any) => {
      notification.open({
        message: msg,
      });
    };

    const formState = reactive<FormState>({
      username: "jack",
      password: "redballoon",
      remember: false,
    });

    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    const { validate, validateInfos } = useForm(
      formState,
      reactive({
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
      })
    );

    // 提交操作
    const onSubmit = () => {
      validate()
        .then(() => {
          if (
            toRaw(formState).username === "jack" &&
            toRaw(formState).password === "redballoon"
          ) {
            axios.post("/api/user/login", toRaw(formState)).then(() => {
              openNotification("登录成功");
            });
          } else {
            openNotification("登录失败");
          }
        })
        .catch((err) => {
          openNotification("登录失败");
        });
    };
    return {
      formState,
      onFinish,
      openNotification,
      onFinishFailed,
      onSubmit,
      validateInfos,
      wrapperCol: { span: 24 },
    };
  },
});
</script>

<style scoped>
.box {
  min-height: 100vh;
  width: 100vw;
  background-image: url("../assets/login.jpg");
  background-size: cover;
  overflow: hidden;
}
.content {
  height: 50vh;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.from-input {
  height: 40px;
  border-radius: 3px;
}

.content_title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}

.content_submit {
  text-align: center;
}
</style>
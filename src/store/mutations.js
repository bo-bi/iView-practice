import { login } from "@/common/utils"

const state = {
  userProfile: {

  }
}

const mutations = {
  UPDATE_USER_PROFILE(state) {
    login();
  }
}

export {
  state,
  mutations,
}

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref({
    username: '',
    email: '',
    avatar: 'https://i.pravatar.cc/150?img=1'
    })
    return { user }
})

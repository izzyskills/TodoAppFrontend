<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
localStorage.removeItem("token");
store.commit("removeToken");
store.commit("initializeStore");
router.push("/login");
</script>

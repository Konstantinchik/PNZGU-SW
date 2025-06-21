import { createRouter, createWebHistory } from 'vue-router';
import Cookies from 'js-cookie';
import MainPage from '../pages/MainPage.vue';
import NewsPage from '../pages/NewsPage.vue';
import ContactsPage from '../pages/ContactsPage.vue';
import RequirementsPage from '../pages/RequirementsPage.vue';
import ForParticipants from '../pages/ForParticipants.vue';
import ArchivePage from '../pages/ArchivePage.vue';
import SignIn from "../pages/SignIn.vue";
import AdminPage from "../pages/AdminPage.vue";
import UserTablePage from "../pages/UserTablePage.vue";
import IncomingApplicationsPage from "../pages/IncomingApplicationsPage.vue";
import HistoryApplication from "../pages/HistoryApplication.vue";
import DirectionPage from "../pages/DirectionPage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/news', component: NewsPage },
    { path: '/contacts', component: ContactsPage },
    { path: '/requirements', component: RequirementsPage },
    { path: '/for-participants', component: ForParticipants },
    { path: '/archive', component: ArchivePage },
    { path: '/sign-in', component: SignIn },
    { path: '/admin-panel', component: AdminPage, meta: { requiresAuth: true } },
    { path: '/admin-panel/edit-participants', component: UserTablePage, meta: { requiresAuth: true } },
    { path: '/admin-panel/incoming-applications', component: IncomingApplicationsPage, meta: {requiresAuth: true}},
    { path: '/admin-panel/history-applications', component: HistoryApplication, meta: {requiresAuth: true}},
    { path: '/admin-panel/directions', component: DirectionPage, meta: {requiresAuth: true}}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = Cookies.get('auth_token');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            next();
        } else {
            next('/sign-in'); // Перенаправляем на страницу входа, если токен отсутствует
        }
    } else {
        next();
    }
});


export default router;

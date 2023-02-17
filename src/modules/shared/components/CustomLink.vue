<template>
    <a v-if="isExternalLink" :href="link.to" target="_blank">{{ link.name }}</a>
    <router-link v-else :to="link.to" v-slot="{ href, isActive }">
        <!-- {{ link.name }} -->
        <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{ link.name }}</a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith("http");
        },
    },
};
</script>

<style scoped>
.is-active {
    color: #42b983
}

.normal-link {
    color: #c5c5c5;
}
</style>

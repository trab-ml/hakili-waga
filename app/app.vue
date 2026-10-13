<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>

<style lang="css">
@import "~/assets/css/main.css";
</style>

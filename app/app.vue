<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
</template>

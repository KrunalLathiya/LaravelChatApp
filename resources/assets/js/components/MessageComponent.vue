<template>
    <div class="message" :class="{ 'self': message.selfMessage }">
        <strong class="user">{{ message.user.name }}</strong>
        <p class="body">{{ message.body }}</p>
    </div>
</template>

<script>

    export default {
        props: ['message']
    }
</script>

<style>
    .user {
        font-weight: 800;
    }
    .body {
        margin-bottom: 0;
        white-space: pre-wrap;
    }
    .message {
        border-bottom: 1px solid #000000
    }
    .self {
        background-color: #f0f0f0;
        padding: 10px;
    }
</style>

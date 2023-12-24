<!-- src/components/UserProfileImage.vue -->
<template>
    <div class="user-profile">
      <img :src="profileImage" :alt="altText" class="profile-image" />
      <p class="user-name">{{ userName }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      profileImage: {
        type: String,
        default: 'https://via.placeholder.com/100',
      },
      altText: {
        type: String,
        default: 'User Profile Image',
      },
      userName: {
        type: String,
        default: 'John Doe',
      },
    },
  };
  </script>
  
  <style scoped>
  
  .user-profile {
    margin-top: 20px;
    text-align: center;
  }
  
  .profile-image {
    border-radius: 50%;
  }
  
  .user-name {
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
  
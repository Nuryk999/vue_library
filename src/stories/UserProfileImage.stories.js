import UserProfileImage from '../components/UserProfileImage.vue';

export default {
  title: 'UserProfileImage',
  component: UserProfileImage,
};

export const Default = () => ({
  components: { UserProfileImage },
  data() {
    return {
      profileImage: 'https://via.placeholder.com/150',
      altText: 'User Image',
      userName: 'Jane Doe',
    };
  },
  template: '<UserProfileImage :profile-image="profileImage" :alt-text="altText" :user-name="userName" />',
});

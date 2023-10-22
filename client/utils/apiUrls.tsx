export const variables = {
  register: `${process.env.BASE_URL_DEV}/register`,
  login: `${process.env.BASE_URL_DEV}/login`,
  socialLogin: `${process.env.BASE_URL_DEV}/socialLogin`,
  getUserProfile: `${process.env.BASE_URL_DEV}/me`,
  getPublicProfile: (id: string) => {
    return `${process.env.BASE_URL_DEV}/publicProfile/${id}`;
  },
  updateProfile: `${process.env.BASE_URL_DEV}/update`,
  generateQRCode: `${process.env.BASE_URL_DEV}/generateQR`,
};

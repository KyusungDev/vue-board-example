import client from '@/api/client';
const BASE_URL = 'http://localhost:8000/api';

export default {
  // getPostList: () => {
  //   return new Promise((resolve, reject) => {
  //     client
  //       .get(`${BASE_URL}/posts`)
  //       .then(res => {
  //         if (res && res.status === 200) {
  //           resolve(res);
  //         } else {
  //           console.log(res);
  //           reject(new Error('Invalid response'));
  //         }
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         reject(new Error(err.response.data.message || err.message));
  //       });
  //   });
  // },
  getPost: id => client.get(`${BASE_URL}/supports/${id}`),
  getPostList: () => client.get(`${BASE_URL}/supports`),
  create: data => client.get(`${BASE_URL}/supports`, data),
  update: (id, data) => client.get(`${BASE_URL}/supports/${id}`, data),
  delete: id => client.get(`${BASE_URL}/supports/${id}`)

  // getPost: id => {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       data: {
  //         createdAt: '2019-05-14 22:26',
  //         updatedAt: '2019-05-14 22:26',
  //         id: 1,
  //         title: '제목입니다.',
  //         contents: '게시글 내용입니다.',
  //         user: {
  //           id: 1,
  //           email: 'admin@candovue.com',
  //           name: 'Admin',
  //           isAdmin: true
  //         },
  //         comments: [
  //           {
  //             createdAt: '2019-05-14 22:26',
  //             updatedAt: '2019-05-14 22:26',
  //             id: 2,
  //             contents: '두번째 댓글',
  //             user: {
  //               id: 1,
  //               email: 'admin@candovue.com',
  //               name: 'Admin',
  //               isAdmin: true
  //             }
  //           },
  //           {
  //             createdAt: '2019-05-14 22:26',
  //             updatedAt: '2019-05-14 22:26',
  //             id: 1,
  //             contents: '첫번째 댓글',
  //             user: {
  //               id: 1,
  //               email: 'admin@candovue.com',
  //               name: 'Admin',
  //               isAdmin: true
  //             }
  //           }
  //         ]
  //       }
  //     });
  //   });
  // },
  // getPostList: () => {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       data: [
  //         {
  //           createdAt: '2019-05-14 22:26',
  //           updatedAt: '2019-05-14 22:26',
  //           id: 1,
  //           title: '제목입니다.',
  //           contents: '게시글 내용입니다.',
  //           user: {
  //             id: 1,
  //             email: 'admin@candovue.com',
  //             name: 'Admin',
  //             isAdmin: true
  //           },
  //           comments: [
  //             {
  //               createdAt: '2019-05-14 22:26',
  //               updatedAt: '2019-05-14 22:26',
  //               id: 2,
  //               contents: '안녕하세요. 첫번째 게시글에 대한 두번째 댓글입니다.',
  //               user: {
  //                 id: 1,
  //                 email: 'admin@candovue.com',
  //                 name: 'Admin',
  //                 isAdmin: true
  //               }
  //             },
  //             {
  //               createdAt: '2019-05-14 22:26',
  //               updatedAt: '2019-05-14 22:26',
  //               id: 1,
  //               contents: '안녕하세요. 첫번째 게시글에 대한 첫번째 댓글입니다.',
  //               user: {
  //                 id: 1,
  //                 email: 'admin@candovue.com',
  //                 name: 'Admin',
  //                 isAdmin: true
  //               }
  //             }
  //           ]
  //         }
  //       ]
  //     });
  //   });
  // }

  //   get: async () => {
  //     return {
  //       data: [
  //         {
  //           id: 1,
  //           roleId: 1,
  //           roleName: 'role_1',
  //           description: 'role1_desc',
  //           users: ['user1', 'user2'],
  //           label: 'role_1'
  //         },
  //         {
  //           id: 2,
  //           roleId: 2,
  //           roleName: 'role_2',
  //           description: 'role2_desc',
  //           users: ['user1', 'user2'],
  //           label: 'role_2'
  //         },
  //         {
  //           id: 3,
  //           roleId: 3,
  //           roleName: 'role_3',
  //           description: 'role3_desc',
  //           users: ['user1', 'user2'],
  //           label: 'role_3'
  //         },
  //         {
  //           id: 4,
  //           roleId: 4,
  //           roleName: 'role_4',
  //           description: 'role4_desc',
  //           users: [],
  //           label: 'role_4'
  //         }
  //       ]
  //     };
  //   }
};

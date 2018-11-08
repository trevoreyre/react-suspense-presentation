import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

const userImages = {
  '1': 'https://source.unsplash.com/E9uJ65vwGmE/',
  '2': 'https://source.unsplash.com/Nm70URdtf3c/',
  '3': 'https://source.unsplash.com/vMV6r4VRhJ8/',
  '4': 'https://source.unsplash.com/wqIvOmQdWp0/',
  '5': 'https://source.unsplash.com/U22pJ6BclUQ/',
  '6': 'https://source.unsplash.com/K-chxjiTu7c/',
  '7': 'https://source.unsplash.com/iFgRcqHznqg/',
  '8': 'https://source.unsplash.com/d2MSDujJl2g/',
  '9': 'https://source.unsplash.com/tNCH0sKSZbA/',
  '10': 'https://source.unsplash.com/TMgQMXoglsM/',
}

export const getUsers = async () => {
  const { data: users } = await api.get('users')
  return users.map((user, index) => ({
    ...user,
    avatar: userImages[user.id] + '15x15',
    avatarHd: userImages[user.id] + '150x150',
  }))
}

export const getUser = async userId => {
  const { data: user } = await api.get(`users/${userId}`)
  return {
    ...user,
    avatar: userImages[user.id] + '15x15',
    avatarHd: userImages[user.id] + '150x150',
  }
}

export const getUserPosts = async userId => {
  const { data: posts } = await api.get(`users/${userId}/posts`)
  return posts
}

export const getUserAlbums = async userId => {
  const { data: albums } = await api.get(`users/${userId}/albums`)
  return albums
}

export const getUserTasks = async userId => {
  const { data: tasks } = await api.get(`users/${userId}/todos`)
  return tasks
}

export const getPosts = async () => {
  const { data: posts } = await api.get('posts')
  return posts.map((post, index) => ({
    ...post,
    body: post.body.charAt(0).toUpperCase() + post.body.slice(1) + '.',
  }))
}

export const getComments = async postId => {
  const { data: comments } = await api.get(`posts/${postId}/comments`)
  return comments
}

import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const userImages = [
  'https://source.unsplash.com/E9uJ65vwGmE/',
  'https://source.unsplash.com/Nm70URdtf3c/',
  'https://source.unsplash.com/vMV6r4VRhJ8/',
  'https://source.unsplash.com/wqIvOmQdWp0/',
  'https://source.unsplash.com/U22pJ6BclUQ/',
  'https://source.unsplash.com/K-chxjiTu7c/',
  'https://source.unsplash.com/iFgRcqHznqg/',
  'https://source.unsplash.com/d2MSDujJl2g/',
  'https://source.unsplash.com/tNCH0sKSZbA/',
  'https://source.unsplash.com/TMgQMXoglsM/'
]

export const getUsers = async () => {
  const { data: users } = await api.get('users')
  return users.map((user, index) => ({
    ...user,
    avatar: userImages[index] + '15x15',
    avatarHd: userImages[index] + '400x400'
  }))
}

export const getUserPosts = async userId => {
  const { data: posts } = await api.get(`users/${userId}/posts`)
  return posts
}

export const getUserAlbums = async userId => {
  const { data: albums } = await api.get(`users/${userId}/albums`)
  return albums
}

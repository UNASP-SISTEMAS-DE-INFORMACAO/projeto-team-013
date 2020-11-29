import api from './api'
export const store = async (file, module_id, delivery_id) => {
  const form = new FormData()
  form.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type
  })

  const { data } = await api.post(
    `/modules/${module_id}/deliveries/${delivery_id}/file_deliveries`,
    form,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}

export const update = async (
  file,
  module_id,
  delivery_id,
  file_delivery_id
) => {
  const form = new FormData()
  form.append('file', {
    uri: file.uri,
    name: file.name,
    type: file.type
  })

  const { data } = await api.put(
    `/modules/${module_id}/deliveries/${delivery_id}/file_deliveries/${file_delivery_id}`,
    form,
    {
      headers: {
        Accept: 'application/json'
      }
    }
  )
  return data
}

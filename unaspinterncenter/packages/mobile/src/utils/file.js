import mime from 'mime'

export const createFormData = ({ file }) => {
  const file_uri = 'file:///' + file.uri.split('file:/').join('')
  const form = new FormData()
  form.append('file', {
    uri: file_uri,
    name: file.name,
    type: mime.getType(file_uri)
  })

  return form
}

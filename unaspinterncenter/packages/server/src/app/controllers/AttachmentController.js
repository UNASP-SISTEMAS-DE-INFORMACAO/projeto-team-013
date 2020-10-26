/* eslint-disable camelcase */
const { Attachment } = require('../models')
const { File, Module } = require('../models')

class AttachmentController {
  async store(req, res) {
    const { id } = req.params
    try {
      if (!(await Module.findByPk(id))) return res.status(404).end()

      const { orginalname: name, size, key, location: url = '' } = req.file
      const file = await File.create({
        name,
        size,
        key,
        url
      })

      if (!file) return res.status(400).end()

      const { title, description } = req.body
      const attachment = await Attachment.create({
        title,
        description,
        module_id: id,
        file_id: file.id
      })

      return res.status(201).send(attachment)
    } catch (error) {
      return res.status(400).end()
    }
  }
}

module.exports = new AttachmentController()

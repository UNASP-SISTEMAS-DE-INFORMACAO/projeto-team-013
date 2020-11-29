module.exports = function (sequelize, DataTypes) {
  const File = sequelize.define(
    'File',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER(10)
      },
      key: {
        allowNull: false,
        type: DataTypes.STRING
      },
      url: {
        allowNull: true,
        type: DataTypes.STRING
      },
      size: {
        allowNull: false,
        type: DataTypes.DOUBLE
      }
    },
    {
      hooks: {
        beforeCreate: async file => {
          if (process.env.STORAGE_TYPE == 'local') {
            file.url = `${process.env.APP_URL}/files/${file.key}`
          }
          return [file.url]
        },
        beforeUpdate: async file => {
          if (process.env.STORAGE_TYPE == 'local') {
            file.url = `${process.env.APP_URL}/files/${file.key}`
          }
          return [file.url]
        }
      }
    }
  )

  return File
}
